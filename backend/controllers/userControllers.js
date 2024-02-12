import User from "../models/userModels.js";
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/function.js'
import Applications from "../models/applicationModels.js";
import UserProfile from "../models/userProfileModel.js";

//POST REGISTRATION
const userRegistration = async (req, res) => {
	try {
		const { first_name, last_name, userEmail, password } = req.body;

		if (!first_name || !last_name || !userEmail || !password) return res.status(400).json({ message: 'incomplete data' });

		// LOOK FOR USER EMAIL TO VALIDATE IF EMAIL IS TAKE
		const userExist = await User.findOne({ userEmail })

		// IF EMAIL IS FOUND - NOTIFY USER AND STOP EXECUTION
		if (userExist) return res.status(400).json({ message: 'Email is already in used' });

		// MAKE A RANDOM PASSWORD BEFORE SAVING THE USER ACCOUNT
		const salt = await bcrypt.genSalt();
		const hashPassword = await bcrypt.hash(password, salt);

		// IF EMAIL NOT FOUND - EXECUTION CONTINUE IN CREATE NEW USER
		const newUser = await User.create({
			first_name,
			last_name,
			userEmail,
			password: hashPassword
		});

		res.status(201).json({
			_id: newUser._id,
			token: generateToken(newUser),
			name: first_name + " " + last_name,
			email: userEmail
		})

	} catch (error) {
		handleServerError(res, error)
	}
}

// POST LOGIN
const userLogin = async (req, res) => {
	try {

		const { userEmail, password } = req.body;

		if (!userEmail || !password) return res.status(400).json({ message: "incomplete data" });

		const userExist = await User.findOne({ userEmail });

		if (!userExist) return res.status(401).json({ message: "This user does not exits" });

		if (userExist) {
			const passwordMatch = await bcrypt.compare(password, userExist.password);
			if (!passwordMatch) return res.status(401).json({ message: 'Invalid email or password' });
		}

		res.status(200).json({
			_id: userExist._id,
			name: `${userExist.first_name} ${userExist.last_name}`,
			token: generateToken(userExist),
			email: userExist.userEmail,
			message: "Login Successfully"
		})

	} catch (error) {
		handleServerError(res, error)
	}
}

// POST ADD USER APPLICATIONS
const postApplication = async (req, res) => {
	const { company, position, location, salary, duties } = req.body;
	try {

		const userID = req.user;
		const applied = await Applications.findOne({ company });

		if (applied) {
			if ((position === applied.position) && (location === applied.location)) {
				return res.status(400).json({ message: "Already applied" });
			}
		}

		const newApplication = await Applications.create({
			company,
			position,
			location,
			salary,
			duties,
			userId: userID,
		})

		res.status(201).json({ message: "Application submitted" });

	} catch (error) {
		res.status(400).json({ error: "Couldn't create application, sorry!" })
	}
}

// GET ALL USER APPLICATIONS
const getApplications = async (req, res) => {
	try {
		const userId = req.user;
		const userExist = await Applications.find({ userId });

		if (!userExist) return res.status(400).json({ message: 'User does not exits' });

		res.status(201).json(userExist);

	} catch (error) {
		res.status(400).json({ error: "Couldn't create application, sorry!" })
	}
}

// GET SINGLE APPLICATION
const getApplicationById = async (req, res) => {
	try {
		const { appId } = req.params;
		const application = await Applications.findById(appId);

		if (!application) return res.status(400).json({ message: "Application not found, sorry" });

		res.status(201).json(application);

	} catch (error) {
		res.status(400).json({ error: "something went wrong!" })
	}
}

// GET SINGLE APPLICATION
const removeApplication = async (req, res) => {
	try {
		const { appId } = req.params;
		const deletedApplication = await Applications.findByIdAndDelete(appId);

		res.status(201).json({ message: 'Application has been removed.' });

	} catch (error) {
		res.status(400).json({ error: "something went wrong!" })
	}
}

// User Profile
const saveUserProfile = async (req, res) => {
	try {
		const { career, experience, phone, userEmail, city, state, postcode, country } = req.body;

		const userExist = await User.findOne({ userEmail });
		const phoneExists = await UserProfile.findOne({ userEmail });

		// Verificar si correo ya esta siendo utilizado por otro usuario.
		if (userExist && `${userExist._id}` !== req.user) {
			return res.status(400).json({ message: `The email ${userEmail} is in used` })
		}

		if (!userExist) {
			return res.status(400).json({ message: `The email ${userEmail} is not registered` })
		}

		// Verificar numero de telefono
		if (phoneExists) {
			if(`${phoneExists.userId}`!== req.user && phoneExists.phone === phone){
				return res.status(400).json({ message: `El número de teléfono ${phone} ya está en uso.` });
			}
			
		}

	
		if (!phoneExists) {
			 const newProfile = await UserProfile.create({
				career,
				experience,
				phone,
				userEmail,
				city,
				state,
				postcode,
				country,
				userId: req.user
			});
			return res.status(201).json(newProfile);
		} 
	 
	}
	catch (error) {
		res.json({ message: "Something is not right!" })
	}
}

const updateUserProfile = async (req, res) => {
	try {
		const { userEmail, phone } = req.body;

		// We are going to verify if email is already taken or registered to our platform
		const emailExist = await User.findOne({ userEmail });

		if (emailExist && `${emailExist._id}` !== req.user) {
			return res.status(400).json({ message: `The email ${userEmail} is in used` })
		}

		if (!emailExist) return res.status(400).json({ message: `The email ${userEmail} is not registered` });

		// Verify User Phone number 
		const userPhone = await UserProfile.findOne({ phone });
		const findProfile = await UserProfile.findOne({ userEmail });

		if (userPhone && userPhone.userId !== req.user) {
			return res.status(400).json({ message: `The phone number ${phone} is in used` })
		}

		let updatedProfile;

		if (!userPhone ) {
			updatedProfile = await UserProfile.findByIdAndUpdate(findProfile._id, req.body, { new: true });
		} else {
			updatedProfile = await UserProfile.findByIdAndUpdate(findProfile._id, req.body, { new: true });
		}

		res.status(201).json(updatedProfile);
		
	} catch (error) {
		console.error("Error updating user profile:", error);
		res.status(400).json({ message: error.message || "Something went wrong" });
	}

};

const deleteUserProfile = async (req, res) => {
	try {
		const userId = req.user;
		const userProfile = await UserProfile.findOne({userId});
		const userFound = await UserProfile.findByIdAndDelete(userProfile._id);
		console.log(userFound)
		
		if(!userFound){
			return res.status(400).json({ message: 'Profile not Found'})
		} 

		const emptyObject = {
			career: '',
			experience: '',
			phone: '',
			userEmail: userFound.userEmail,
			city: '',
			state: '',
			postcode: '',
			country: ''
		}
		res.status(200).json(emptyObject)
	} catch (error) {
		console.error("Error updating user profile:", error);
		res.status(400).json({ message: error.message || "Something went wrong" });
	}
}

const getUserProfile = async (req, res) => {
	try {
		const { userId } = req.params;
		const userProfile = await UserProfile.findOne({ userId });
	
		if(!userProfile) return res.status(404).json({ message: "User not found"});

		res.status(200).json(userProfile)
	} catch (error) {
		console.error("Error updating user profile:", error);
		res.status(400).json({ message: error.message || "Something went wrong" });
	}
}

export {
	userRegistration,
	userLogin,
	postApplication,
	getApplications,
	getApplicationById,
	removeApplication,
	saveUserProfile,
	updateUserProfile,
	deleteUserProfile,
	getUserProfile
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Image } from 'src/app/core/models/image.interface';
import { Profile } from 'src/app/core/models/profile.interface';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	username = localStorage.getItem('username');
	userEmail = localStorage.getItem('email')

	// *****************  RELATED TO USER PROFILE ********************* // 
	useProfile!: Profile;
	userProfileId = '';
	userId = localStorage.getItem("userid");

	// *****************  RELATED TO UPLOAD PICTURE ********************* // 
	file!: any;
	photoSelected!: string | ArrayBuffer | null;
	toggleButton: boolean = false

	constructor(private fb: FormBuilder, private profileService: ProfileService) { }

	ngOnInit(): void {
		this.loadProfileInformation();
	}

	profileForm = this.fb.group({
		career: ["", Validators.required],
		experience: ["", Validators.required],
		phone: ["", Validators.required],
		userEmail: [`${this.userEmail}`, Validators.required],
		city: ["", Validators.required],
		state: ["", Validators.required],
		postcode: ["", Validators.required],
		country: ["", Validators.required],
	});

	addInfo() {
		if (this.profileForm.valid) {
			const profileValues: Profile = {
				career: this.profileForm.get('career')?.value?.toLocaleLowerCase() || '',
				experience: this.profileForm.get('experience')?.value?.toLocaleLowerCase() || '',
				phone: this.profileForm.get('phone')?.value?.toLocaleLowerCase() || '',
				userEmail: this.profileForm.get('userEmail')?.value?.toLocaleLowerCase() || '',
				city: this.profileForm.get('city')?.value?.toLocaleLowerCase() || '',
				state: this.profileForm.get('state')?.value?.toLocaleLowerCase() || '',
				postcode: this.profileForm.get('postcode')?.value?.toLocaleLowerCase() || '',
				country: this.profileForm.get('country')?.value?.toLocaleLowerCase() || '',
			}

			this.profileService.post(profileValues).subscribe({
				next: (response) => {
				},
				error: (error) => error.error.message
				
			})


		}
	}

	updateProfile() {
		if (this.profileForm.valid) {
			const profileValues: Profile = {
				career: this.profileForm.get('career')?.value?.toLocaleLowerCase() || '',
				experience: this.profileForm.get('experience')?.value?.toLocaleLowerCase() || '',
				phone: this.profileForm.get('phone')?.value?.toLocaleLowerCase() || '',
				userEmail: this.profileForm.get('userEmail')?.value?.toLocaleLowerCase() || '',
				city: this.profileForm.get('city')?.value?.toLocaleLowerCase() || '',
				state: this.profileForm.get('state')?.value?.toLocaleLowerCase() || '',
				postcode: this.profileForm.get('postcode')?.value?.toLocaleLowerCase() || '',
				country: this.profileForm.get('country')?.value?.toLocaleLowerCase() || '',
			}

			this.profileService.update(profileValues).subscribe({
				next: (response) => {
					if (response) {
						if (response) {
							delete response._id;
							delete response.userId;
							delete response.createdAt;
							delete response.updatedAt;
							delete response.__v;
							this.useProfile = response;
						}
					}
				},
				error: (error) => {
					console.log(error.error.message)
				}
			})

		}
	}

	deleteInfo() {
		this.profileService.delete(this.userId || "").subscribe({
			next: response => {
				if (response) {
					delete response._id;
					delete response.createdAt;
					delete response.updatedAt;
					delete response.__v;
					delete response.userId;
					this.profileForm.setValue(response);
				}
			}
			,
			error: error => error.error.message
		})
	}

	// *******************   UPLOAD IMAGE PROCESS ***********************
	onPhotoSelected(event: any) {
		event.preventDefault();
		if (event.target.files && event.target.files[0]) {
			this.file = event.target.files[0];
			// image preview
			const reader = new FileReader();
			reader.onload = e => {
				this.photoSelected = reader.result;
			}

			reader.readAsDataURL(this.file);
		}
	}

	uploadImage() {
		if (this.file) {
			this.profileService.uploadImage(this.file).subscribe({
				next: (response) => {
					console.log(response);
				},
				error: (error) => {
					//console.log('Coming from uploadImage  ' + error.error.message);
				}
			});
		} else {
			console.error('No image selected.');
		}
	}

	updatePicture(){
		if (this.file) {
			this.profileService.updateImage(this.file).subscribe({
				next: (response) => {
					
				},
				error: (error) => {
					//console.log(error)
				}
			});
		} else {
			console.error('No image selected.');
		}
	}

	// ******************* CALL WHEN PAGE IS RELOADING  ***********************
	loadProfileInformation() {
		this.profileService.get(`${this.userId}`).subscribe({
			next: (response) => {
				delete response._id;
				delete response.createdAt;
				delete response.updatedAt;
				delete response.__v;
				delete response.userId;
				this.profileForm.setValue(response);
			},
			error: error => console.log('Coming from Load Profile get service ' + error.error.message)
		});

		this.profileService.getImages().subscribe({
			next: response => {
				//console.log('Profile get service ' + response)
				if (response) {
					this.photoSelected = response
					this.toggleButton = true;
				}
			},
			error: error => console.log(error.error.message)
		})
	}

}

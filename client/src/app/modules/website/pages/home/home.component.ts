import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  services = [
    {
      id: 1,
      img: '../../../../../assets/service1.png',
      title: 'Job Opportunities Tailored for You',
      desc: `Discover a curated selection of entry-level job opportunities across various industries. Our platform connects you with positions that match your skills, qualifications, and career aspirations. Whether you're a recent graduate or someone looking to pivot into a new field, we have opportunities waiting for you.`
    },
    {
      id: 2,
      img: '../../../../../assets/service2.png',
      title: 'Career Development Resources',
      desc: `Elevate your career with our rich repository of resources. From resume building tips to interview preparation guides, we provide the tools you need to present your best professional self. Our commitment to your success goes beyond job listings; we empower you with the knowledge and skills for long-term career growth.`
    },
    {
      id: 1,
      img: '../../../../../assets/service3.png',
      title: 'Personalized Profile Checks',
      desc: `Ensure your profile stands out to potential employers with our personalized profile checks. Before sharing your information with our partner companies, we review your profile to highlight your unique strengths and optimize your chances of landing your desired job.`
    },

  ]




}

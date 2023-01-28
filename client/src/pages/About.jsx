import paddy from "../assets/blog-rice.jpg"
import ava from "../assets/ava.jpg"
import { Contributor } from "../components"

const About = () => {
  const contacts = [
    {
      name: "Trique Nguyen",
      linkedin: "https://www.linkedin.com/in/trique-nguyen/",
      github: "https://github.com/triquenguyen",
      info: "B.S. in Software Engineering at San Jose State University",
      gmail: "dung.n.nguyen@sjsu.edu",
      photo: ava,
    },
    {
      name: "Trique Nguyen",
      linkedin: "https://www.linkedin.com/in/trique-nguyen/",
      github: "https://github.com/triquenguyen",
      info: "B.S. in Software Engineering at San Jose State University",
      gmail: "dung.n.nguyen@sjsu.edu",
      photo: ava,
    },
    {
      name: "Trique Nguyen",
      linkedin: "https://www.linkedin.com/in/trique-nguyen/",
      github: "https://github.com/triquenguyen",
      info: "B.S. in Software Engineering at San Jose State University",
      gmail: "dung.n.nguyen@sjsu.edu",
      photo: ava,
    },
  ]

  return (
    <div className='flex justify-center mb-6'>
      <div className='w-[100rem]'>
        <h1 className="py-6 text-center text-[48px] ">About Us</h1>
        <div className='px-24'>
          <h2 className='text-[24px]'>About Paddy Plant Prognosis</h2>
          <p className='pt-2 pb-8'>Paddy Plant Prognosis assists rice farmers with A.I. technology to detect diseases in their paddies, brings scientific information to light, and helps them with solutions from experts</p>         
          <h2 className='text-[24px]'>Meet Our Contributors</h2>
          <p className='pt-2 pb-6'>We are thriving students with passionate in developing tools to help the world!</p>
          <div className="flex flex-col justify-between gap-6 pb-10">
            {contacts.map((contact, index) => (
              <Contributor key={index} photo={contact.photo} name={contact.name} linkedin={contact.linkedin} github={contact.github} info={contact.info} gmail={contact.gmail} />
            ))}
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default About

// rafce

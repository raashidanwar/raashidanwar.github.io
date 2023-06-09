import './App.css';
import profilePic from './profile-pic.jpg';
import githubLogo from './icons/github.svg';
import googleLogo from './icons/google.svg';
import linkedinLogo from './icons/linkedin.svg';
import youtubeLogo from './icons/youtube.svg';

function App() {
  return (
    <div className='flex justify-center h-screen bg-[#58585C]'>
      <div className='mt-20 relative'>
        <img
          className="text-center w-36 h-36 mx-auto rounded-full place-content-center border-solid border-2"
          src={profilePic} alt="logo"
        />
        <h1 className='text-4xl text-center text-white mt-5'>Hello, I'm <span className='text-[#FFD700]'>Raashid Anwar</span></h1>
        <h2 className='text-2xl text-center text-white mt-5'>I'm a <span className='text-[#FFD700]'>Software Engineer</span> at <span className='text-[#FFD700]'>GitHub</span></h2>
        <div className='text-center mt-5'>
          <div className='inline-block w-1/2 mx-auto'>
            <div className='text-center'>I love solving problems, I have worked at Samsung, Flipkart, and GitHub</div>
            <div className='text-center'>
              I joined GitHub in 2021 as a Software Engineer and was part of npmjs.com and there I implemented end user features like WebAuth and password rest etc.
              , improved users password by impleming argon2 password hashing algorithm and did a major enhanshment to secrure the cloud infrastructure.
            </div>
          </div>
        </div>
      </div>
      <div className='absolute justify-center top-0 right-0 mr-5'>
        <div className='grid grid-cols-3 grid-flow-row gap-5 mt-5'>
          <a href='/blog' className='flex justify-center items-center bg-white w-20 h-8 rounded hover:cursor-pointer'>Blog</a>
          <a href='/courses' className='flex justify-center items-center bg-white w-20 h-8 rounded hover:cursor-pointer'>Course</a>
          <a href='/projects' className='flex justify-center items-center bg-white w-20 h-8 rounded hover:cursor-pointer'>Projects</a>
        </div>
      </div>
      <div className='absolute bottom-0'>
        <div className='grid grid-cols-3 grid-flow-row gap-4 mb-5'>
          <a href='https://github.com/raashidanwar'><img src={githubLogo} alt="GitHub Logo" className='w-11 h-11'/></a>
          <a href='https://www.linkedin.com/in/raashidanwar'><img src={linkedinLogo} alt="GitHub Logo" className='w-11 h-11'/></a>
          <a href=''><img src={youtubeLogo} alt="GitHub Logo" className='w-11 h-11'/></a>
        </div>
      </div>
    </div>
  );
}

export default App;

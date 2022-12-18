import React from 'react';
import '../styles/Home.css';
import '../styles/Home810.css';

import { TfiWorld } from 'react-icons/tfi';
import { BsPerson } from 'react-icons/bs';
import { BiCircle } from 'react-icons/bi';
import { BsArrowUpRight, BsTwitter, BsLinkedin } from 'react-icons/bs';


// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="w-[100%] h-[130vh] md:h-[155vh] sm:h-[200vh] flex justify-center items-center overflow-auto p-4 bg-[url('./Images/spheregrid.svg')] cursor-[url('./Images/cursorcluster.svg'),auto]">
      <div className="home-container w-[92vw] sm:w-full sm:h-[2100px] h-[800px] md:h-[1600px] object-contain z-10 border-8 border-black absolute top-12 sm:top-0 mb-4 sm:mb-0 shadow-[16px 12px 0px #000]">
        <div className="card-top flex justify-between p-1 bg-black text-white">
          <div className="heading-left flex flex-wrap whitespace-nowrap gap-2">
            <h2>SAM.OS</h2>
            <h2 className='sm:text-sm'>CONFIG 20XX *** JUL 10-16 *** LIVE FROM IN</h2>
          </div>
          <div className="heading-right flex gap-4 items-center px-4 border-l sm:border-l-0 sm:absolute sm:top-0 sm:right-0 sm:px-0">
            <TfiWorld />
            <h2>IND</h2>
          </div>
        </div>
        {/* <img
          src="./Images/wallpaperselector.svg"
          alt="card-background"
          className="card-image -z-10"
        /> */}

        <div className="about h-[460px] w-[700px] sm:h-[720px] sm:w-full absolute top-12 left-4 sm:left-0 border-8 border-black z-10 overflow-hidden shrink-0">
          <div className="about-card flex justify-between items-center p-1 bg-black text-white">
            <div className="card-icon flex whitespace-nowrap gap-2">
              <BiCircle />
              <BiCircle />
              <BiCircle />
            </div>
            <div className="card-heading">
              <h2>BIO.DMG</h2>
            </div>
            <div className="people-logo flex items-center px-4">
              <BsPerson />
            </div>
          </div>
          <div className="bg-white w-full h-full opacity-100">
            <div className="about-top w-full h-[75%] border-b-4 border-black flex sm:flex-col">
              <div className="left-part w-[40%] sm:w-[50%] sm:absolute sm:left-[25%] sm:h-fit h-full">
                <div className="image-container w-[90%] h-64 sm:h-48 flex justify-center items-center">
                  <img
                    src="./Images/pic.png"
                    alt="author image"
                    className=" w-[80%] h-[80%] author-img"
                  />
                </div>
              </div>
              <div className="right-part w-[60%] sm:w-[110%] sm:absolute sm:top-44 sm:pt-12 h-full">
                <div className="about-text w-[95%] h-[90%] flex flex-col relative top-4 pl-4 pt-2">
                  <span className="flex gap-4 text-xl items-end">
                    <h2 className="text-3xl font-black font-sans">
                      Sameep Shukla
                    </h2>
                    <p>HE/HIM</p>
                  </span>
                  <div className="skill-container flex justify-between items-end">
                    <div className="skill font-semibold text-lg pt-4">
                      <h2>Cyber Security</h2>
                      <h2>Enthusiast</h2>
                    </div>
                    <div className="work font-bold text-xl pt-4 pr-16">
                      <h2 className="font-roboto">@Freelance</h2>
                    </div>
                  </div>
                  <div className="me pt-6 text-xl sm:px-2 whitespace-normal">
                    <p>
                      Hello everyone <br /> I’m a red teamer, highly interested
                      in VA/PT, troubleshooting and Open
                      Source.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-bottom w-full h-[25%] sm:flex-wrap flex justify-between sm:items-start bg-[url('./Images/grid.png')]">
              <span className='flex gap-8 pt-8 pl-4 sm:w-full sm:justify-center sm:flex-col sm:pt-4 sm:gap-4 sm:items-center'>
                <div className="h2-sm sm:w-full sm:flex sm:justify-center">
                <h2>SOCIAL LINKS : </h2>
                </div>
                <div className="sm:flex sm:gap-8 flex gap-6">
                <a href='https://twitter.com/xov3d' target='_blank' className='border-b-2 border-black w-32 flex gap-2'>  
                <BsTwitter className='relative top-1' />
                {/* <h2 className=' flex gap-4'> */}
                  @TWITTER
                  {/* </h2> */}
                <BsArrowUpRight className='relative top-1 left-1'/>
                </a>
                <a href='https://www.linkedin.com/in/sameep-shukla-4a07bb201/' target='_blank' className='border-b-2 border-black w-32 flex gap-2'>  
                <BsLinkedin className='relative top-1' />
                <h2 className=' flex gap-4'>@LINKEDIN</h2>
                <BsArrowUpRight className='relative top-1 left-1'/>
                </a>
                </div>
              </span>
              <h2 className='country pr-4 pt-8 sm:pt-0 sm:absolute sm:bottom-6 sm:left-[45%] sm:font-semibold'>INDIA</h2>
            </div>
          </div>
        </div>


        <div className="container-fluid flex flex-wrap flex-col p-4 sm:p-0 object-contain w-[50%] md:w-full sm:w-full relative left-1/2 md:left-0 sm:left-0 md:top-[420px] sm:top-[600px] z-5 justify-center text-lg gap-10 md:gap-4 sm:gap-0">
          <div className="contacts flex flex-wrap object-contain z-5 justify-start md:justify-center sm:justify-center md:scale-[0.8] sm:scale-[0.7] sm:w-full pl-8 sm:pl-0 pt-4 mt-16 text-lg gap-16">
            {/* GITHUB  */}
            <a
              className="github justify-center items-center flex gap-2 flex-col test-lg font-bold"
              href="https://github.com/sameepshukla"
              target="blank"
            >
              <img
                className="github-img"
                alt="github logo"
                src="./Images/iconpic1.svg"
              />
              <div className="github-name">Github</div>
            </a>

            {/* GOOGLE  */}
            <a
              className="google justify-center items-center flex gap-2 flex-col test-lg font-bold"
              href="https://www.google.com/search?q=sameep+shukla&rlz=1C1CHBF_enIN958IN958&oq=sameep+shukla&aqs=chrome.0.35i39j46i175i199i512j35i39j69i60l2j69i61j69i65.2226j0j7&sourceid=chrome&ie=UTF-8"
              target="blank"
            >
              <img
                className="google-img"
                alt="google logo"
                src="./Images/iconpic.svg"
              />
              <div className="google-name">Google</div>
            </a>

            {/* My DRIVE  */}
            <a
              className="My-Drive justify-center items-center flex gap-2 flex-col test-lg font-bold"
              href="/page"
              target="blank"
            >
              <img
                className="My-Drive-img"
                alt="My-Drive logo"
                src="./Images/driveblock.svg"
              />
              <div className="My-Drive-name">My Linux</div>
            </a>
          </div>

          <div className="folders flex flex-wrap p-4 sm:p-0 md:p-1 md:w-full sm:w-full object-contain z-5 justify-end text-lg gap-8 font-bold md:scale-[0.8] sm:scale-[0.7] md:gap-[50px] sm:gap-[50px] sm:relative sm:top-[-90px] sm:left-[-5%]">
            {/* FOLDER 1  */}
            <a href='#'>
              <img
                className="folder1-img hover:opacity-80"
                alt="folder1 logo"
                src="./Images/folderblock3.svg"
              />
              <div className="folder1-Name">MY Folder</div>
            </a>

            {/* FOLDER 2  */} 
            <a href='#'>
              <img
                className="music-img hover:opacity-80"
                alt="music logo"
                src="./Images/folderblock2.svg"
              />
              <div className="music-Name">Music</div>
            </a>

            {/* FOLDER 3  */}
            <a href='#'>
              <img
                className="reading-img hover:opacity-80"
                alt="reading logo"
                src="./Images/folderblock1.svg"
              />
              <div className="reading-Name">Reading</div>
            </a>

            {/* FOLDER 4  */}
            <a href='#'>
              <img
                className="movies-img hover:opacity-80"
                alt="movies logo"
                src="./Images/folderblock.svg"
              />
              <div className="movies-Name">Movies</div>
            </a>
          </div>
        </div>
        <div className="interest z-50 flex justify-around flex-wrap gap-4 md:absolute md:bottom-2">
        <div className=" music-interest flex flex-col w-[400px] md:w-[550px] sm:w-[354px] object-contain border-4 border-black shrink-0">
        <div className="about-interest flex items-center p-1 bg-black text-white w-full overflow-hidden">
            <div className="card-icon flex justify-start whitespace-nowrap gap-2">
              <BiCircle />
              <BiCircle />
              <BiCircle />
            </div>
            <div className="card-heading flex justify-center w-full">
              <h2>SONG I HEAR ALL THE TIME</h2>
            </div>
          </div>
            <div className="card-text-interest flex justify-start items-end bg-slate-50 w-full h-[150px]">
              <div className="w-[98%] h-[145px] bg-slate-500 flex music-inner">
                <div className="pic w-[30%] h-full object-contain">
                  <img src="./Images/artworkpic.svg" alt="artist" className='pt-4 pl-4'/>
                </div>
                <div className="song w-[70%] h-full pt-4 pl-4 ">
                <a className='link-song' href="https://www.google.com/search?rlz=1C1CHBF_enIN958IN958&amp;sxsrf=ALiCzsb_2sq_YckhAO0SCg2sAowsNMsgLg:1671079770868&amp;q=Kendrick+Lamar+Mr.+Morale+and+the+Big+Steppers&amp;stick=H4sIAAAAAAAAAOPgE-LVT9c3NCxMKjIozjY1VIJwi8rNKzMqTQy01LOTrfRzS4szk_WLUpPzi1Iy89Ljk3NKi0tSi6zSMouKSxQSc5JKcxex6nmn5qUUZSZnK_gk5iYWKfgW6Sn45hcl5qQqJOalKJRkpCo4ZaYrBJekFhSkFhXvYGXcxc7EwQAAE0oLt4IAAAA&amp;sa=X&amp;ved=2ahUKEwj_7Yih6fr7AhWfXGwGHVZgBc0QmxMoAHoECDMQAg" target="_blank">
                  <span className='flex justify-between items-center'>
                  <h2 className='leading-5 text-base font-bold uppercase underline'> Mr. Morale &amp; the Big Steppers - N95</h2> 
                    <img src="./Images/favoriteico.svg" alt="star"  className='w-8 relative right-4'/>
                  </span>
                  <h2 className='underline text-base font-normal'>KENDRICK LAMAR</h2>
                  <div className="w-[93%] h-[10px] border-l-4 border-lime-300 bg-black"></div>
                  <span className='flex gap-4 justify-center items-center w-full text-base'>
                    <img src="./Images/backico.svg" alt="back"  className='w-10 pt-2 pr-2'/>
                    <img src="./Images/playerico.svg" alt="play"  className='w-10 pt-2 pr-2'/>
                    <img src="./Images/nextico.svg" alt="next" className='w-10 pt-2 pr-2' />
                    <img src="./Images/soundico.svg" alt="sound"  className='w-10 pt-2 pr-2'/>
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div className=" reads-interest flex flex-col w-[400px] md:w-[550px] sm:w-[354px] object-contain border-4 border-black shrink-0">
        <div className="about-interest flex items-center p-1 bg-black text-white w-full overflow-hidden">
            <div className="card-icon flex justify-start whitespace-nowrap gap-2">
              <BiCircle />
              <BiCircle />
              <BiCircle />
            </div>
            <div className="card-heading flex justify-center w-full">
              <h2>TOP 2 TALKS</h2>
            </div>
          </div>
            <div className="card-text flex flex-col justify-end w-full h-[150px]">
              <div className="upper w-full h-[80%] bg-white pl-4">

                <a href='https://www.youtube.com/watch?v=14bRsgE8ze4' target='_blank' className="t1-con flex pl-8 pt-4">
                  <div className="star"> <img src="./Images/favoriteico.svg" alt="star"  className='w-6 relative right-4'/> </div>
                  <div className="text-con">
                    <h2 className='font-semibold text-xs'>JAIL BREAKING IN IOS</h2>
                    <h2 className='font-semibold text-xs text-blue-500'>Thim Starr && Cool Starr</h2>
                  </div>
                </a>
                <a href='https://darknetdiaries.com/' target='_blank' className="t2-con flex pl-8 pt-4">
                  <div className="star"> <img src="./Images/favoriteico.svg" alt="star"  className='w-6 relative right-4'/> </div>
                  <div className="text-con">
                    <h2 className='font-semibold text-xs'>DRAKNET DIARIES</h2>
                    <h2 className='font-semibold text-xs text-blue-500'>Jack Rhysider</h2>
                  </div>
                </a>
                
              </div>
              <div className="lower h-[20%] object-contain bg-black flex items-center pl-4 gap-4">
                <a href='#' target='_blank' className='border-b-2 border-white flex'>  
                <h2 className='text-white flex gap-4'>AGENDA </h2>
                <BsArrowUpRight className='text-white relative top-1 left-1'/>
                </a>
              </div>
            </div>
          </div>
        <div className=" gif-interest flex flex-col w-[400px] md:w-[550px] sm:w-[354px] object-contain border-4 border-black shrink-0">
        <div className="about-interest flex items-center p-1 bg-black text-white w-full overflow-hidden">
            <div className="card-icon flex justify-start whitespace-nowrap gap-2">
              <BiCircle />
              <BiCircle />
              <BiCircle />
            </div>
            <div className="card-heading flex justify-center w-full">
              <h2>FAVORITE GIF</h2>
            </div>
          </div>
            <div className="card-text flex justify-center object-cover">
              <img src="./Images/hackercat.gif" alt="hackercat" className='object-cover h-[150px] cat' />
            </div>
          </div>
        </div>
        <img src="./Images/bg1.png" alt="bg" className='w-full h-[250px] md:h-[650px] absolute bottom-0 -z-10 interest-bg'/>
      </div>
    </section>
  );
};

export default Home;

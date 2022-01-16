import { useState } from "react";

import { Card, Modal, Filter, BusinessCard, YearChanger, Clock, Leaves, Loader, SocialMediaIcons, GlowingCube, Blob, Particles, Water, Rocket, Wavy, Smiley, Box, Button, GlassCard, Shutter, Greeting, Parallax, Calculator, Banner, CircularMenu, Squares, FontAwesomeIcons, Checkbox, Climb, Shapes, TiltCard, SkillsBar, DropdownMenu, MagicMenu, Rain } from "./component-imports";

function App() {   
   const [openBusinessCardModal, setOpenBusinessCardModal] = useState(false); 
   const [openYearChangerModal, setOpenYearChangerModal] = useState(false); 
   const [openClockModal, setOpenClockModal] = useState(false); 
   const [openLeavesModal, setOpenLeavesModal] = useState(false); 
   const [openLoaderModal, setOpenLoaderModal] = useState(false); 
   const [openSocialMediaIconsModal, setOpenSocialMediaIconsModal] = useState(false); 
   const [openGlowingCubeModal, setOpenGlowingCubeModal] = useState(false); 
   const [openBlobModal, setOpenBlobModal] = useState(false); 
   const [openParticlesModal, setOpenParticlesModal] = useState(false); 
   const [openWaterModal, setOpenWaterModal] = useState(false); 
   const [openRocketModal, setOpenRocketModal] = useState(false); 
   const [openWaveModal, setOpenWaveModal] = useState(false); 
   const [openSmileyModal, setOpenSmileyModal] = useState(false); 
   const [openBoxModal, setOpenBoxModal] = useState(false); 
   const [openButtonModal, setOpenButtonModal] = useState(false); 
   const [openGlassCardModal, setOpenGlassCardModal] = useState(false); 
   const [openShutterModal, setOpenShutterModal] = useState(false); 
   const [openGreetingModal, setOpenGreetingModal] = useState(false); 
   const [openParallaxModal, setOpenParallaxModal] = useState(false); 
   const [openCalculatorModal, setOpenCalculatorModal] = useState(false); 
   const [openBannerModal, setOpenBannerModal] = useState(false); 
   const [openCircularMenuModal, setOpenCircularMenuModal] = useState(false); 
   const [openSquaresModal, setOpenSquaresModal] = useState(false); 
   const [openFontAwesomeIconsModal, setOpenFontAwesomeIconsModal] = useState(false); 
   const [openCheckboxModal, setOpenCheckboxModal] = useState(false); 
   const [openClimbModal, setOpenClimbModal] = useState(false); 
   const [openShapesModal, setOpenShapesModal] = useState(false); 
   const [openTiltCardModal, setOpenTiltCardModal] = useState(false); 
   const [openSkillsBarModal, setOpenSkillsBarModal] = useState(false); 
   const [openDropdownMenuModal, setOpenDropdownMenuModal] = useState(false); 
   const [openMagicMenuModal, setOpenMagicMenuModal] = useState(false); 
   const [openRainModal, setOpenRainModal] = useState(false); 

  return (
      <>
         <h1 data-text="Creativity" className="header">Creativity</h1>
         <Filter></Filter>
         <div className="cards"> 
            <Card title="Business" description="A small card printed with one's name, email address, and contact information." setOpenModal={setOpenBusinessCardModal} filterItem="cards" serialNo={1} />
            {
               openBusinessCardModal && 
               <Modal component={<BusinessCard />} closeModal={setOpenBusinessCardModal} />
            }

            <Card title="Happy New Year" description="Animation gradually changes from 2021 to 2022 on hover" setOpenModal={setOpenYearChangerModal} filterItem="buttons" serialNo={2} />
            {
                  openYearChangerModal && 
                  <Modal component={<YearChanger />} closeModal={setOpenYearChangerModal} />
            }

            <Card title="Neumorphism Clock" description="New visually pleasing cool trend in a design inspired by Skeuomorphism with a more minimal approach Neumorphism (New+Skeuomorphism)"  setOpenModal={setOpenClockModal} filterItem="glass" serialNo={3} />
            {
                  openClockModal && 
                  <Modal component={<Clock />} closeModal={setOpenClockModal} />
            }

            <Card title="Falling Leaves" description="Emulate autumn leaves falling only using css animations" setOpenModal={setOpenLeavesModal} filterItem="abstract" serialNo={4} />
            {
                  openLeavesModal && 
                  <Modal component={<Leaves />} closeModal={setOpenLeavesModal} />
            }

            <Card title="Loader" description="Used for notifications that reassure users that the system is still handling their request" setOpenModal={setOpenLoaderModal} filterItem="abstract" serialNo={5} />
            {
                  openLoaderModal && 
                  <Modal component={<Loader />} closeModal={setOpenLoaderModal} />
            }

            <Card title="3D Isometric Icons" description="Isometric design for shorthand symbols that link to company's profile on different networks" setOpenModal={setOpenSocialMediaIconsModal} filterItem="icons" serialNo={6} />
            {
                  openSocialMediaIconsModal && 
                  <Modal component={<SocialMediaIcons />} closeModal={setOpenSocialMediaIconsModal} />
            }
            
            <Card title="Glowing Cube" description="Ambient light 3D glowing cube with text animation effect" setOpenModal={setOpenGlowingCubeModal} filterItem="abstract" serialNo={7} />
            {
               openGlowingCubeModal && 
               <Modal component={<GlowingCube />} closeModal={setOpenGlowingCubeModal} />
            }

            <Card title="Smooth Animated Blob" description="Blob animation effect using SVG" setOpenModal={setOpenBlobModal} filterItem="abstract" serialNo={8} />
            {
               openBlobModal && 
               <Modal component={<Blob />} closeModal={setOpenBlobModal} />
            }

            <Card title="Glowing Particles" description="Random particles background animation effect" setOpenModal={setOpenParticlesModal} filterItem="nature" serialNo={9} />
            {
               openParticlesModal && 
               <Modal component={<Particles />} closeModal={setOpenParticlesModal} />
            }

            <Card title="Water Bubbles Background" description="Background animation with creative water bubbles" setOpenModal={setOpenWaterModal} filterItem="nature" serialNo={10} />
            {
               openWaterModal && 
               <Modal component={<Water />} closeModal={setOpenWaterModal} />
            }

            <Card title="Rocket" description="Also known as image carousels or slideshows are a convenient way to display multiple images, videos, or graphics" setOpenModal={setOpenRocketModal} filterItem="abstract" serialNo={11} />
            {
               openRocketModal && 
               <Modal component={<Rocket />} closeModal={setOpenRocketModal} />
            }

            <Card title="Oxygen Wave" description="A water wave with oxygen text hover effect" setOpenModal={setOpenWaveModal} filterItem="nature" serialNo={12} />
            {
               openWaveModal && 
               <Modal component={<Wavy />} closeModal={setOpenWaveModal} />
            }

            <Card title="Smiley Rating Bar" description="A simple rating bar which displays animated smileys as rating icon" setOpenModal={setOpenSmileyModal} filterItem="buttons" serialNo={13} />
            {
               openSmileyModal && 
               <Modal component={<Smiley />} closeModal={setOpenSmileyModal} />
            }

            <Card title="Quote Of The Day" description="Creative design with hover animation effect" setOpenModal={setOpenBoxModal} filterItem="cards" serialNo={14} />
            {
               openBoxModal && 
               <Modal component={<Box />} closeModal={setOpenBoxModal} />
            }

            <Card title="Button Hover Effects" description="Various hover effects and animations for buttons" setOpenModal={setOpenButtonModal} filterItem="buttons" serialNo={15} />
            {
               openButtonModal && 
               <Modal component={<Button />} closeModal={setOpenButtonModal} />
            }

            <Card title="Glowing Gradient Card" description="Various hover effects and animations for buttons" setOpenModal={setOpenGlassCardModal} filterItem="cards" serialNo={16} />
            {
               openGlassCardModal && 
               <Modal component={<GlassCard />} closeModal={setOpenGlassCardModal} />
            }

            <Card title="Glass Shutter" description="Shutter effect based on progress bar" setOpenModal={setOpenShutterModal} filterItem="glass" serialNo={17} />
            {
               openShutterModal && 
               <Modal component={<Shutter />} closeModal={setOpenShutterModal} />
            }

            <Card title="Greeting Card" description="Greeting - 3D foldable card on hover" setOpenModal={setOpenGreetingModal} filterItem="cards" serialNo={18} />
            {
               openGreetingModal && 
               <Modal component={<Greeting />} closeModal={setOpenGreetingModal} />
            }

            <Card title="Parallax Effect" description="An effect where background images move past the camera more slowly than foreground images, creating an illusion of depth in a 2D scene of distance. (NOT SUPPORTED IN MOBILE BROWSERS)" setOpenModal={setOpenParallaxModal} filterItem="abstract" serialNo={19} />
            {
               openParallaxModal && 
               <Modal component={<Parallax />} closeModal={setOpenParallaxModal} />
            }

            <Card title="Calculator" description="Basic functional calculator with animations" setOpenModal={setOpenCalculatorModal} filterItem="glass" serialNo={20} />
            {
               openCalculatorModal && 
               <Modal component={<Calculator />} closeModal={setOpenCalculatorModal} />
            }

            <Card title="Starry Night Banner" description="Banner with clouds and stars animation effect" setOpenModal={setOpenBannerModal} filterItem="nature" serialNo={21} />
            {
               openBannerModal && 
               <Modal component={<Banner />} closeModal={setOpenBannerModal} />
            }

            <Card title="Circular Menu" description="Animated circular menu displaying ring of choices with custom menu icons" setOpenModal={setOpenCircularMenuModal} filterItem="menu" serialNo={22} />
            {
               openCircularMenuModal && 
               <Modal component={<CircularMenu />} closeModal={setOpenCircularMenuModal} />
            }

            <Card title="Colorful Squares" description="Animated background animation which randomly creates colorful squares" setOpenModal={setOpenSquaresModal} filterItem="abstract" serialNo={23} />
            {
               openSquaresModal && 
               <Modal component={<Squares />} closeModal={setOpenSquaresModal} />
            }

            <Card title="Font Awesome Icons" description="Animated background animation using font-awesome icons" setOpenModal={setOpenFontAwesomeIconsModal} filterItem="icons" serialNo={24} />
            {
               openFontAwesomeIconsModal && 
               <Modal component={<FontAwesomeIcons />} closeModal={setOpenFontAwesomeIconsModal} />
            }

            <Card title="Checkbox UI" description="Animated checkbox UI animation" setOpenModal={setOpenCheckboxModal} filterItem="buttons" serialNo={25} />
            {
               openCheckboxModal && 
               <Modal component={<Checkbox />} closeModal={setOpenCheckboxModal} />
            }

            <Card title="Climb" description="A box climbing up the hill animation" setOpenModal={setOpenClimbModal} filterItem="abstract" serialNo={26} />
            {
               openClimbModal && 
               <Modal component={<Climb />} closeModal={setOpenClimbModal} />
            }

            <Card title="Shapes" description="A set of square and circlular shaped objects floating around" setOpenModal={setOpenShapesModal} filterItem="abstract" serialNo={27} />
            {
               openShapesModal && 
               <Modal component={<Shapes />} closeModal={setOpenShapesModal} />
            }

            <Card title="Mousemove Card" description="3D card with parallax and tilt effect on mousemove" setOpenModal={setOpenTiltCardModal} filterItem="cards" serialNo={28} />
            {
               openTiltCardModal && 
               <Modal component={<TiltCard />} closeModal={setOpenTiltCardModal} />
            }

            <Card title="5 Star Skills Rating Bar" description="A scale used to display skills in one's technology stack" setOpenModal={setOpenSkillsBarModal} filterItem="buttons" serialNo={29} />
            {
               openSkillsBarModal && 
               <Modal component={<SkillsBar />} closeModal={setOpenSkillsBarModal} />
            }

            <Card title="Dropdown Menu" description="A list of choices when an user clicks on the menu's title" setOpenModal={setOpenDropdownMenuModal} filterItem="menu" serialNo={30} />
            {
               openDropdownMenuModal && 
               <Modal component={<DropdownMenu />} closeModal={setOpenDropdownMenuModal} />
            }

            <Card title="Magic Menu Indicator" description="Animated list of options presented to an user that will reveal current page on the website" setOpenModal={setOpenMagicMenuModal} filterItem="menu" serialNo={31} />
            {
               openMagicMenuModal && 
               <Modal component={<MagicMenu />} closeModal={setOpenMagicMenuModal} />
            }

            <Card title="Colorful Rain" description="Animated rain with randomized color" setOpenModal={setOpenRainModal} filterItem="abstract" serialNo={32} />
            {
               openRainModal && 
               <Modal component={<Rain />} closeModal={setOpenRainModal} />
            }
            </div>
      </>
  );
}

export default App;
import React from "react";
import Project from "./Project/project";
import { NavLink} from 'react-router-dom'

export default function Home(){
    const [projects, setProjects] = React.useState([])
    const count = 4
    React.useEffect(()=>{
        fetch("/api/project")
        .then(res => res.json())
        .then(data => setProjects(data.projects))
},[])
const element = projects.slice(0,count).map(item => {
   return  <Project key={item.id} id={item.id} src={item.imageUrl} name={item.name} type={item.type} />
})
    return(
        <div className="Home">
    <div className="detail">
     <NavLink to={'about'} className='home-avarta'><img className="avarta-large animition-left" src="/images/Avarta.jfif" alt="aaa" /></NavLink> 
      <div className="boderInfo">
      <div className="info">
        <h1 className="title-info animition-top">Hi 👋, My name is 
        <br />
        <NavLink to={'about'}><span className="home-name text-highlight">Quoc Viet Luong</span></NavLink> <br />
        A Frontend Developer
        </h1>
      </div>
        </div>
      </div>
      <h1 className="animition-right">Tech Stack</h1>
      <p className="skill-paragraph animition-right">Technologies I’ve been working with recently</p>
      <div className="skill-container animition-right">
      <img src="data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1325%20102.004L13.7062%207.5H106.294L97.8562%20101.989L59.9437%20112.5L22.1325%20102.004Z'%20fill='%23E44F26'/%3e%3cpath%20d='M60%20104.467L90.6375%2095.9737L97.845%2015.2287H60V104.467Z'%20fill='%23F1662A'/%3e%3cpath%20d='M60%2050.2763H44.6625L43.605%2038.4075H60V26.8163H30.9375L31.215%2029.9288L34.0613%2061.8675H60V50.2763ZM60%2080.3775L59.9475%2080.3925L47.04%2076.9088L46.215%2067.665H34.5787L36.2025%2085.86L59.9475%2092.4525L60%2092.4375V80.3775Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M59.9587%2050.2763V61.8675H74.2312L72.8887%2076.9013L59.9587%2080.3888V92.4488L83.7225%2085.86L83.895%2083.9025L86.6175%2053.3888L86.9025%2050.2763H59.9587ZM59.9587%2026.8163V38.4075H87.9562L88.1887%2035.805L88.7175%2029.9288L88.995%2026.8163H59.9587Z'%20fill='white'/%3e%3c/svg%3e" alt=""></img>
      <img src="data:image/svg+xml,%3csvg%20width='120'%20height='119'%20viewBox='0%200%20120%20119'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1325%20101.154L13.71%207.4375H106.29L97.8563%20101.139L59.9438%20111.562L22.1325%20101.154Z'%20fill='%231572B6'/%3e%3cpath%20d='M60%20103.597L90.6375%2095.174L97.845%2015.1018H60V103.597Z'%20fill='%2333A9DC'/%3e%3cpath%20d='M60%2049.054H75.3375L76.395%2037.2842H60V25.7895H89.0625L88.785%2028.8724L85.9387%2060.5487H60V49.054Z'%20fill='white'/%3e%3cpath%20d='M60.0713%2078.9044L60.0188%2078.9193L47.1113%2075.4609L46.2863%2066.2942H34.65L36.2738%2084.3413L60.015%2090.8788L60.0713%2090.8639V78.9044Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M74.3512%2060.0615L72.9562%2075.4534L60.03%2078.9119V90.8714L83.79%2084.3412L83.9662%2082.4001L85.98%2060.0615H74.3512Z'%20fill='white'/%3e%3cpath%20d='M60.0413%2025.7895V37.2842H32.0438L31.8113%2034.6996L31.2825%2028.8724L31.005%2025.7895H60.0413ZM60%2049.054V60.5487H47.2538L47.0213%2057.9641L46.4963%2052.1369L46.2188%2049.054H60Z'%20fill='%23EBEBEB'/%3e%3c/svg%3e" alt="" />
      <img src="data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%207.5H112.5V112.5H7.5V7.5Z'%20fill='%23F5DE19'/%3e%3cpath%20d='M78.0337%2089.5312C78.9284%2091.3485%2080.3183%2092.8759%2082.0434%2093.9375C83.7684%2094.9991%2085.7583%2095.5515%2087.7837%2095.5313C91.8712%2095.5313%2094.485%2093.4875%2094.485%2090.6562C94.485%2087.2812%2091.8%2086.0738%2087.3%2084.105L84.8325%2083.0475C77.7075%2080.0138%2072.9825%2076.215%2072.9825%2068.1825C72.9825%2060.7838%2078.6075%2055.1475%2087.4312%2055.1475C90.2876%2054.9412%2093.1415%2055.5805%2095.637%2056.9856C98.1324%2058.3907%20100.159%2060.4994%20101.464%2063.0488L93.75%2067.98C93.2476%2066.716%2092.3728%2065.6345%2091.2416%2064.879C90.1104%2064.1236%2088.7763%2063.7298%2087.4162%2063.75C86.8228%2063.6906%2086.2236%2063.7555%2085.6566%2063.9404C85.0897%2064.1254%2084.5675%2064.4265%2084.1233%2064.8244C83.6792%2065.2224%2083.3228%2065.7085%2083.0768%2066.2518C82.8309%2066.7951%2082.7009%2067.3837%2082.695%2067.98C82.695%2070.9388%2084.5287%2072.1388%2088.7625%2073.98L91.23%2075.0375C99.615%2078.6338%20104.355%2082.2975%20104.355%2090.5363C104.355%2099.42%2097.3762%20104.287%2088.005%20104.287C84.3536%20104.52%2080.713%20103.691%2077.5223%20101.901C74.3317%20100.11%2071.7274%2097.4342%2070.0237%2094.1963L78.0337%2089.5312ZM43.1775%2090.3863C44.7262%2093.135%2046.1362%2095.46%2049.5262%2095.46C52.7662%2095.46%2054.8137%2094.1925%2054.8137%2089.2612V55.71H64.68V89.3925C64.68%2099.6075%2058.68%20104.257%2049.9462%20104.257C46.8591%20104.426%2043.7931%20103.657%2041.1513%20102.051C38.5096%20100.444%2036.4157%2098.0761%2035.145%2095.2575L43.1775%2090.3863Z'%20fill='black'/%3e%3c/svg%3e" alt=""/>
      <img src="/logo/ReactjsLogo.svg" alt=""/>
      <img src="data:image/svg+xml,%3csvg%20width='88'%20height='88'%20viewBox='0%200%2088%2088'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M44%200C19.69%200%200%2019.69%200%2044C0%2063.47%2012.595%2079.915%2030.085%2085.745C32.285%2086.13%2033.11%2084.81%2033.11%2083.655C33.11%2082.61%2033.055%2079.145%2033.055%2075.46C22%2077.495%2019.14%2072.765%2018.26%2070.29C17.765%2069.025%2015.62%2065.12%2013.75%2064.075C12.21%2063.25%2010.01%2061.215%2013.695%2061.16C17.16%2061.105%2019.635%2064.35%2020.46%2065.67C24.42%2072.325%2030.745%2070.455%2033.275%2069.3C33.66%2066.44%2034.815%2064.515%2036.08%2063.415C26.29%2062.315%2016.06%2058.52%2016.06%2041.69C16.06%2036.905%2017.765%2032.945%2020.57%2029.865C20.13%2028.765%2018.59%2024.255%2021.01%2018.205C21.01%2018.205%2024.695%2017.05%2033.11%2022.715C36.63%2021.725%2040.37%2021.23%2044.11%2021.23C47.85%2021.23%2051.59%2021.725%2055.11%2022.715C63.525%2016.995%2067.21%2018.205%2067.21%2018.205C69.63%2024.255%2068.09%2028.765%2067.65%2029.865C70.455%2032.945%2072.16%2036.85%2072.16%2041.69C72.16%2058.575%2061.875%2062.315%2052.085%2063.415C53.68%2064.79%2055.055%2067.43%2055.055%2071.555C55.055%2077.44%2055%2082.17%2055%2083.655C55%2084.81%2055.825%2086.185%2058.025%2085.745C66.7597%2082.796%2074.3497%2077.1822%2079.7268%2069.6937C85.1039%2062.2052%2087.9974%2053.219%2088%2044C88%2019.69%2068.31%200%2044%200Z'%20fill='black'/%3e%3c/svg%3e" alt="" class="githubIcon "></img>
      </div>
        <div className="projects-home">
            <NavLink
                to='project'
                ><h2>Project</h2></NavLink>
            <div className="project-list-home">
            {element}
            </div>
        </div>
        </div>
    )
}
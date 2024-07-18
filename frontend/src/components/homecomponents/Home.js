import React from 'react'
import '../homecomponents/Home.css';
import faceMan from '../homecomponents/krishna.jpg'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-container-name'>
                <div>Name Of University</div>
            </div>
            <div className='home-container-profile'>
                <div className='home-container-profile-box'>
                    <div className='home-container-profile-box-image'>
                        <img src={faceMan} alt='' />
                    </div>
                    <div className='home-container-profile-name'>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name :</td>
                                        <td>Krishna Nand Yadav</td>
                                    </tr>
                                    <tr>
                                        <td>ID No :</td>
                                        <td>11172640</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='home-container-profile-detail-address'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Country :</td>
                                        <td>Nepal</td>
                                    </tr>
                                    <tr>
                                        <td>State :</td>
                                        <td>Madhesh Pradesh</td>
                                    </tr>
                                    <tr>
                                        <td>District :</td>
                                        <td>Siraha</td>
                                    </tr>
                                    <tr>
                                        <td>Address :</td>
                                        <td>Sakhuwanankarkatti-1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='home-container-profile-university'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Department :</td>
                                <td>Computer Science and Engineering</td>
                            </tr>
                            <tr>
                                <td>Post :</td>
                                <td>Teacher</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
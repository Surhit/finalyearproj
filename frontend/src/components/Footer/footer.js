import React from 'react';
import { Link } from "react-router-dom";
class Footer extends React.Component{
    render(){
        return (
            <div>
            <footer class="footer--section">
            <div class="footer--widgets pt--70 pb--20 bg-lightdark" data-bg-img="img/footer-img/footer-widgets-bg.png">
                <div class="container">
                    <div class="row AdjustRow">
                        <div class="col-md-4 col-xs-6 col-xxs-12 pb--60">
                            <div class="widget">
                                <h2 class="h4 fw--700 widget--title">About Us</h2>

                                <div class="text--widget">
                                    <p>Ipsum is simply dummy text of the printing indusLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                </div>
                            </div>
                            <div class="widget">
                                <h2 class="h4 fw--700 widget--title">Subscribe To Our Newsletter</h2>

                                <div class="newsletter--widget style--1" data-form="validate">
                                    <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank">
                                        <div class="input-group">
                                            <input type="email" name="EMAIL" placeholder="Enter your emil address" class="form-control" autocomplete="off" required/>

                                            <div class="input-group-btn">
                                                <button type="submit" class="btn-link"><i class="fa fa-send-o"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-6 col-xxs-12 pb--60">
                            <div class="widget">
                                <h2 class="h4 fw--700 widget--title">Recent Post</h2>

                                <div class="recent-posts--widget">
                                    <ul class="nav">
                                        <li>
                                            <p class="date fw--300">
                                                <a href="#"><i class="fa mr--8 fa-file-text-o"></i>19 Jan 2017</a>
                                            </p>
                                            <p class="title fw--700">
                                                <a href="#">I look at you and see the rest of my life in front</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p class="date fw--300">
                                                <a href="#"><i class="fa mr--8 fa-file-text-o"></i>19 Jan 2017</a>
                                            </p>
                                            <p class="title fw--700">
                                                <a href="#">If I know what love is, it is because of you</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p class="date fw--300">
                                                <a href="#"><i class="fa mr--8 fa-file-text-o"></i>19 Jan 2017</a>
                                            </p>
                                            <p class="title fw--700">
                                                <a href="#">At the touch of love everyone becomes a poet</a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="widget">
                                <h2 class="h4 fw--700 widget--title">Tags</h2>

                                <div class="tags--widget">
                                    <ul class="nav">
                                        <li><a href="#">BuddyPress</a></li>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">Music</a></li>
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Movies</a></li>
                                        <li><a href="#">Photography</a></li>
                                        <li><a href="#">WordPress</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                        <div class="col-md-4 col-xs-6 col-xxs-12 pb--60">
                            <div class="widget">
                                <h2 class="h4 fw--700 widget--title">Forums</h2>

                                <div class="links--widget">
                                    <ul class="nav">
                                        <li><a href="#">User Interface Design</a></li>
                                        <li><a href="#">Front-End Engineering</a></li>
                                        <li><a href="#">Web Development</a></li>
                                        <li><a href="#">Social Media Marketing</a></li>
                                        <li><a href="#">Content Marketing</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="widget">
                                <h2 class="h4 fw--700 widget--title">Useful Links</h2>

                                <div class="links--widget">
                                    <ul class="nav">
                                        <li><a href="/#">Sign Up</a></li>
                                        <li><a href="/#">Login</a></li>
                                        <li><a href="/comingsoon">Coming Soon</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                    <ul class="nav float--left">
                                    <li><Link to="#"><i class="fa fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i class="fa fa-google-plus"></i></Link></li>
                                    <li><Link to="#"><i class="fa fa-youtube"></i></Link></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer--copyright pt--30 pb--30 bg-darkest">
                <div class="container">
                    <div class="text fw--500 fs--14 text-center">
                        <p>Copyright &copy; Soci<span>fly</span>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            </footer>
            </div>
        );
    }
}
export default Footer;
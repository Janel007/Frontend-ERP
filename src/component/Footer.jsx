import React from 'react'
import { FaCircleUser } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <nav className="pull-left">
                    <ul>
                        <li>
                            <a href="">
                               No-Name Dev
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Licenses
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright pull-right">
                    &copy;
                    <script data-cfasync="false"
                            src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                    <script>document.write(new Date().getFullYear())</script>
                    , made with  <FaCircleUser /> by <a href=""> No-Name Dev</a>
                    237Mboa - +237 658525704 and dyvangauthier@gmail.com
                </div>
            </div>
        </footer>
    )
}

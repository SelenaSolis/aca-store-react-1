function Header(props){

    if(props.cart){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li >
                                <a href="#" onClick = {props.cartView}>Items In Cart ({props.countCartItems(props.cart)})</a>
                            </li>
                        </ul>
                    </div>
                
                </div>
                
            </nav>
        )
    }
    else{
        return "loading..."
    }
}
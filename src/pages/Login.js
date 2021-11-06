import useAuth from "../auth/useAuth";
import { useHistory, useLocation } from 'react-router-dom';

export default function Login() {

	const auth = useAuth();
	const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;
	
	const handleLogin= () => {
			
			const user = document.getElementById('user').value;
			const pass = document.getElementById('pass').value;
			//console.log(user.value, pass.value)
			auth.login(user, pass);

			history.push(previusObjectURL || "/")
	}
	
    return (
		<div className="grada">
        <section className="ftco-section w-100 h-100">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Login</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
						<div className="login-form" >
		      		<div className="form-group">
		      			<input id="user" type="text" className="form-control rounded-left" placeholder="Username" required></input>
		      		</div>
	            <div className="form-group d-flex">
	              <input id="pass" type="password" className="form-control rounded-left" placeholder="Password" required/>
	            </div>

	            <div className="form-group text-center">
	            	<button className="btn btn-primary rounded p-3 px-5 " onClick={handleLogin}>Ingresar</button>
	            </div>
	          </div>
	        </div>
				</div>
			</div>
		</div>
	</section>
	</div>
    )
}

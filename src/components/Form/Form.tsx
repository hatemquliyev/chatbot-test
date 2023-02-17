import './form.scss'

const Form = () => {
    return(
        <form>
        <div>
            <label htmlFor="e-mail">Email address</label>
            <input type="email" id="e-mail" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="emailHelp">We'll never share your email with anyone else.</small>
        </div>
        <div>
            <label htmlFor="passWord">Password</label>
            <input type="password" className="fpassword" id="passWord" placeholder="Password" />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}

export default Form
import './Banner.css';

function Banner() {
    return (
        <div className="banner__main">
            <div className="left">
                <h5>Do you want to learn?</h5>
                <p>Connecting for <em>contributing</em> Interacting for <span>Innovating</span></p>
                <button className='btn'>Join With Us <svg className="svg-inline--fa fa-angle-double-right fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg></button>
            </div>
            <div className="right">
                <form action="">
                    <div className="formlist">
                    <input type="text" placeholder='Name...' className='input'></input>
                    <input type="email" placeholder='Email-id...' className='input'></input>
                    <input type="number" placeholder='Phone No...' className='input'></input>
                    <select name="" id="" className='select'>
                        <option value="">Are you student</option>
                        <option value=""> Are you Entrepreneur</option>
                        <option value="">Are you Investor</option>
                    </select>
                    <button className='btn_submit'>Submit Form</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Banner;
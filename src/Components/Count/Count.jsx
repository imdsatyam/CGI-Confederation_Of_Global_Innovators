import './Count.css';
import counter_1 from '../../Assets/counter-first-icon.png';
import counter_2 from '../../Assets/counter-second-icon.png';
import counter_3 from '../../Assets/counter-third-icon.png';
import counter_4 from '../../Assets/counter-fourth-icon.png';

function Count() {
    let valueDisplays = document.querySelectorAll(".count__num");
    let interval = 8000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute ("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
    return (
        <div className="count">
                <div className="count__part">
                    <div className="logo__count">
                        <img src={counter_1} alt="" />
                        <span className='count__num' data-val="500">000</span>
                    </div>
                    <div className="logo__count">
                        <img src={counter_2} alt="" />
                        <span className='count__num' data-val="85">00</span>
                    </div>
                    <div className="logo__count">
                        <img src={counter_3} alt="" />
                        <span className='count__num' data-val="7896">0000</span>
                    </div>
                    <div className="logo__count">
                        <img src={counter_4} alt="" />
                        <span className='count__num' data-val="600">000</span>
                    </div>
                </div>
        </div>
    );
}

export default Count;
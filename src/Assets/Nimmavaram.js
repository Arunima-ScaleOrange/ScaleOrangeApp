import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Popover } from "antd";
import axios from 'axios';
import './Nimmavaram.css';

const Nimmavaram = (props) => {
    const [plotInfo, setPlotInfo] = useState(null);
    const [compassInfo, setCompassInfo] = useState(null);
    const [roadInfo, setRoadInfo] = useState(null);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const displayRazorPay = async (amount) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if(!res) {
            alert('You are offline... Failed to load Razorpay SDK');
            return; 
        }

        const options = {
            key: "rzp_test_EV9lhF2l22rHhW",
            currency: "INR",
            amount: amount * 100,
            name: props.name,
            description: "Thanks for purchasing",
            image: 'https://www.pngmart.com/files/7/Payment-PNG-Transparent.png',
            handler: function(response) {
                // alert(response.razorpay_payment_id);
                alert("Payment Successful");
            },
            prefill: {
                name: props.name
            }
        };

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    useEffect(() => {
        axios.get("https://retoolapi.dev/HehzD9/plotinformation").then((response) => {
          setPlotInfo(response.data);
        });

        axios.get("https://retoolapi.dev/X6lvtI/compassinfo").then((response) => {
            setCompassInfo(response.data);
        })

        axios.get("https://retoolapi.dev/f3NlRk/roadinfo").then((response) => {
            setRoadInfo(response.data);
        })
      }, []);

      if (!plotInfo || !compassInfo || !roadInfo) return null;

  return (
    <>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="210mm"
        height="297mm"
        className='svg-cls'
        version="1.1"
        viewBox="0 0 210 297"
    >
    <g>
    {
            roadInfo.map((value) => {
                return(
                    <>
                    <rect
                     width={value.width}
                     height={value.height}
                     x={value.x}
                     y={value.y}
                     fill={value.fill}
                     strokeWidth={value.strokeWidth}
                     ry={value.ry}
                     transform={value.transform}
                    >
                    </rect>
                    </>
                )
            })
        }
        {
            plotInfo.map((value) => {
                return(
                    <>
                        <Popover 
                            content={
                            <>
                                <p className="plot-no">Plot {value.textLabel}</p>
                                <p className={value.fill}>{value.status}</p>
                                {
                                    value.fill==="green"? <Button type="primary" style={{backgroundColor: "black"}} onClick={() => displayRazorPay(value.price)}>
                                    Buy this Plot
                                    </Button> : ""
                                }
                            </>
                        } 
                        title="Plot Details">
                            <path
                                fill={value.fill} 
                                strokeWidth={value.strokeWidth}
                                d={value.d}
                                clipPath={value.clipPath}
                                transform={value.transform}
                                strokeOpacity="1"
                                stroke="#fff5f5"
                            />
                        </Popover>
                        <Popover 
                            content={
                                <>
                                    <p className="plot-no">Plot {value.textLabel}</p>
                                    <p className={value.fill}>{value.status}</p>
                                    {
                                    value.fill==="green"? <Button type="primary" style={{backgroundColor: "black"}} onClick={() => displayRazorPay(value.price)}>
                                    Buy this Plot
                                    </Button> : ""
                                    }
                                </>
                            } 
                            title="Plot Details">
                            <text
                                x={value.textX}
                                y={value.textY}
                                fill={value.textFill}
                                strokeWidth={value.textStrokeWidth}
                                fontSize={value.textFontSize}
                                xmlSpace="preserve"
                                
                                >
                                <tspan x={value.textX} 
                                       y={value.textY} 
                                       fill="#fff" 
                                       strokeWidth={value.textStrokeWidth}
                                       transform={value.textTransform}
                                       strokeOpacity="1"
                                       stroke="#fff5f5"
                                >
                                        {value.textLabel}
                                </tspan>
                            </text>
                        </Popover>
                    </>
                )
            })
        }
        {
            compassInfo.map((value) => {
                return(
                    <>
                        <path
                                fill={value.fill} 
                                strokeWidth={value.strokeWidth}
                                d={value.d}
                                clipPath={value.clipPath}
                                transform={value.transform}
                        />
                        <text
                                x={value.textX}
                                y={value.textY}
                                fill={value.textFill}
                                strokeWidth={value.textStrokeWidth}
                                fontSize={value.textFontSize}
                                xmlSpace="preserve"
                                >
                                <tspan x={value.textX} 
                                       y={value.textY} 
                                       fill={value.textFill} 
                                       strokeWidth={value.textStrokeWidth}
                                       transform={value.textTransform}>
                                        {value.textLabel}
                                </tspan>
                            </text>
                    </>
                )
            })
        }
        </g>
        </svg>
    </>
  )
}

export default Nimmavaram
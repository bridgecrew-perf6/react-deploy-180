import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
import CardProduct from "../../../Component/CardProduct/CardProduct";
import { GlobalConsumer } from "../../../Context/Context";

class Product extends Component {
  render() {
    return (
      <Fragment>
        <p className="heading-p">Halaman Product</p>
        <hr />
        <div className="header">
          <div className="logo">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///9oyT709PRlyDpjyDWB0l+f2otdxitgxzFkyDdfxy+o35OM1HBcxir59vre89Wb2oP0+/H7/vrV78t3zlLm9uDs+Oe95q2D0WWU13zw+ez79vyx4Z/F6bni9Num3pHN7MFxzEqK1G2046Pd8tXB57K55Kl0zU2C0mLj797b7NXK5r/s8umt4Jl6z1iT13hUxBrR6Mr56WrHAAAMw0lEQVR4nO2cbXuiPBOGSSdKkhpFVHypKL633YLu//9zTyaAiqDbqvfqHs9cX9qmIXKSyWSSDDoOiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUhPJr89ifpjb1B7sBLvP8Hrreo10EpwCY8Wn98fr1NPuJDAnkOycWe83pQp/ix0qDsTRgP9VHjszoRh4j4ZHrsrYaerno/vjoS9gX5GvvsRLlz5aJQzug9h8C4eDXJWdyEMxYUOfLTt3oNwqi98AGz+Gku1bif05+pC+zALLv37L+hmwvaGX2pfR07jsT7oVsIRu3j/2Hz02E68kTCYXXYkvGd6+bG+5jbC9uyyBYoYaz3WTG8i9LuX7x2krbZ+6GR5E2HjopOxbgY1UUxy1700af6HuoUwvuhCQOisbf/j4+Pz83ffewjiDYQd93yzBm+w/vSzmi+o5tvHH7r8v9H1hKPza0EQs/VXs7mv+pKq+RCnej3h4JzNgXr/1WwaolPCt3+LsH9uEPJZZPlejipnhN1HIF5LODqzZgDtfTVToDLh+79EOKz2GiCjt5cSYE44t4RcSPEXUeXwKsBl9YIJ2GcOeJZQDCdB+BdXjfy6Pe9qe4PZR7MKMCccmKvAbkF3/l40zl+vAexUdiHAGcCcMDGEIrIlf8/p8PgawkHl/bmfe8BmsX5GiLbpLsstAFeKc/d4rxyksGXF0wEQrhAn4R+YSvxCSKhWVwAuK0Npd52NwebL5+p1GndGp4RgUHYdW1LTSqn0rkAl02jS602i6SYzXlBs2O+YsmXosb1PAzXot0xZf34INszku+iYstX2HKNeXkFYGWDKedaDb2EXHz93Wb0Qtr18STGNopS7FRnV8UkB6+wb9tfWy0oW+vuytpcNCZ7s77XVzbAl7C/uDaqXMKL3c8BR5dOSH5mFDvOtYeAyOAJ8+a0XJy2tzE25neOSjimBd79QK7a3zo/nNX9gEWWtfVQ4rEKETbGxb6lf1ZJYpDba9I7cJLDRgbD5SwcnLfmmzq5YFHOmOifVcAkN3eKVuLkAs1GhsCqQhPefA1ZOFcC+Mgy74pBa27GSTkYZ4bRE6JgquniXbZ07o4Na5pGqVs6W/sDdH7EqllX5B17/OeCoaqrg46wLrZNUXuC3EnyiInAO06F76tYitMmBQeyF43GUPz+3dVLN7wLU0l/rMzZPH4k0TzUli2es1suuLd2Yin5OuKoyUv2VeRPEl2kYgYYk+nvCLzMwx61OOnJ6rVarkw4w0HqnBee7sf2PxzPC1WbH++lHzs2V6T9d449T2KGUW/vLWgNIaWHjciwpiibyLVUZqRxmXfgLR6E7cfLPw4ji5fAv7u5nC9d18/sx05w2Sl3Ja05Y4wx2k4w664qdeRJ8ZztsLUTKn6DjTpstb1zC5ueAfpUndX+lU0XTeiGIlqi6IcDnnBF6Fqg844PGaS5YRqsiIVYRof21zt3UDOOxUdxOCVNqf2HL7BBvlQizvv+Ryq3gXWZG2kz31YQJSJSdgs3a5WVvpJWEwIqOpUCockJRclJ9UR5i5XvTk58TVu0NymGzQHj0DOt5F4bpp58SgmwX2/8u4ZiXCcPTe4PZzwGdbYWV8kWRkIu9Jnmkk0AlYR42jnKPUE2oTiOTAMpusp2cughxGmN8R6VW8DZ/54Spo130cwV5F+Y7cyVC24V+g7FNfIEwu8yb1lGe1zDWnS5T/Dgv25ZXnarU9X9Wu/KkIo/Y0i3G41AwX2zkDyYL0urCuH2zloCudfPo8fn2AmE2uTNt/KbQnGE8ka2L5mmZYOVEiWw++Zl6FY4GknzVhCEJTuK2Y3rTeewX+pZlEySei3fn47grIbGE4U5K92S2KBBmK/VgIDkMVm0nwqAtnRjbW8nl+zpwWqWHX4r/vqOq/QsYZOsmJzuGkWzreTWXS11Pzfdjb0D7TQUk8xMQqaNZDYepwz9DCCxzSKMgHbA4LeW2MgrSSzsnjiYPhH6mkrtCIO9AOLHjDcxjRSaY2WmkOT8s8mbHsf6q7PLjSkLGp8VqLbdshMGJE9SnbX9L44pNNp71lK3QP+5kPrB+9PXItMXxHByqkj+v5XEpxk7Z8MNgQYeFaja0cIuu8qQPT5Yj39VrFWF8vAW8UodojOHGxtuqYNludGjNTD1ycDwhjjyReZDA2oBd+/h2V0f1j2HS7nKPt5l6m+I41NeMwjOE68Imd+C5WpmoRrNX3B1+OzVsNc6YejaQ47N+Nhf6nbrds8CeC94tA8a1fhrvMTWIMgtvefmWjkrCrLHl60nC51WO9AyhWBeOKYw6URj++njB4rd+6YyK88Hr9HXIsq0VEHwzrHuNmcz3ogSb8WxMcZjJvU0o2d168w2ow03gxVtv2zU/ix8C8opVxUXCk3rN9PCi+VKvWk6auZAfP3Kz/JGFv49/L963LOXmVpWdGPWthHx8SpjPj2+ftQcdcctrdi/OE06bFZv42IGnY+PvSV9po2cI68eEe76vtXzIqS/q2GHfgVA23k7wmm8vn1P2uBwMddVhxXnCfMcuhWu+vX39fk3EAxO++S0ZJlWEbBaHvz8/vr6+Pj5//xp7G3gknrGpa3aBLxMyrly7maRdV/FHv2ohN+0/c/yU8JkkN1e70X+DUM5uA3x6Qp7cZKLPT6i2tziZf4BQX3Wk/e8QyitXhP8KIYj5rUPwuQk5uyYl4d8hBO3dOEk8N6F036/JuPhnCLka3MPDPCshKOHdr/+ejhCE7vbv4kCfkBAkV4CnFXfX1OWPFp4wQ207bt2791KF9UfrdbGKgntNDSQSiUT6/5I/+Q9mf6cTWl3MM+409mGxHy0W4XfSsPx4XdnUehHZWX6xLX/keMfuHwHEO2WlLzXNRDfbHAqVMuGI/sZm2FjvTnNMHWfJXLzcsPd2qny+O3T1FRndf1ACNr/LhYuEWVKQ09IAQnDQf16Lv/JyJswEL1eS6b75teIEO/CuPRK9oBrIdW6lo7XnLexI8EPPi5f5b+s9YZ3DPIrimTTVV2tT1l4gxmhV9+qRrdGJPW8c5IRBjP/2F/38wyBZhQ0OM7+nYRAP04taeA3eQNpaYFrzVjfvKB4I9xm4LS44V7KD6XMYm9s8EMzHEntCj2fvyxiU3W6N3zaxazuhxARYzJ71B3ih4J2M8N3FpFJjsDbNpCeAIXyiu05P43sAXI8dJ8KcWoE9XtcqcDr45VvSvelk5oRw0jYyWCz9Yi3Xd+YcJJOY6tHXjDMJOWEsGJ8vJvhHpDDHwuM6wHwTDpy5sTPa4Yk8YPaTJZxLfNndLHHtcwlVmlvtG18zsYSASeQdl3W7gEk5nhQ9m1okJRM3HB+eEDI8cTL9ESpIekENVNg299gZ1TmfOg3J1+3JnjBggkmhcUvsiHAoeX+0EtB1Rhpqvd47uGFKGAp4N90F3F7dF4esKDMku8tJAth1ozZmTxlj8CTvOVPO49GYX/UKwhlCzINQc2dhk677QqzaWs6N33ONL6gBHqbvrdQZTbVWwPSiSCjM/GG63xBiL62EWGeehoEOxjxLES0SoqeZcsxzXL5603f8oIzQXDji1yW0VRLCfLvdeiMkXFnCviEcZoQJ4DRyIMR7C43/FWVC86T8kb0yFAYpJYy5MNXTBFS0UvuqZBAHx4T9nXA1Z3rfh8amR/KOhLmn6St8wuaWVm2F6WQGwTPGg6+B7AmjQYQ/BFPm39hdnswJfQ7MSQkX3FhDStg2LnP/+mCPAxjH429c9KV7QtP6JJhDgTC4K2EWKU3MEKtPzbNc+jOQjXgDaoHTw+a1kY/DtpLuYLzeSpD4LQvg1RmzhNBYNKQxbTMOZ3HMwNx3Nh+aukzlMdBAwmaxTqRp7kDYxpek/Maxld6VMAE3jwW3ClN+xRxzE0EadzprO4GS6PJ41oeJAsBvG9wZe064dZu7kSFkmKmpQ3wXB9vgST7EMJPz8J5ysMPLzTUhWmkD51fjr+dCzoy/Rk/DrS91DSGH5E6E9V13H83UmXKZ9ecrJrTEV32cScK1Yo3sKfieDbvs8UK7Jl0Xuit89YXhlYv0bSOpec1cGWn7ipTP4Ci2CWpCCTWL8JUPfL8m1AbJH0htPKspXO/MQ412Zg71a7u7fd/l8W5Xe7nM/vIny7xre/tCW8VE6q3M7QTLtJKZLToTWwnHYbBMY8t0nWDMvJAi2gvDZfZZh0p5Q85ylJf55aD2gUp9KSr1NEca62tTRJ9KW5G/1jLaiSLhhusrXq17Oi1re4p6Ulw7dub/wWqBRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQS6bz+B77C+P6jIbeeAAAAAElFTkSuQmCC"
              alt="My logo"
            />
          </div>
          <div className="troley">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0_R04Sr0PJ7q3UJHeYRm-Lzz6t9aOhKCsPw&usqp=CAU"
              alt="My troley"
            />
            <div className="count">{this.props.state.totalOrder}</div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    );
  }
}

// const stateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(stateToProps)(Product);
export default GlobalConsumer(Product);

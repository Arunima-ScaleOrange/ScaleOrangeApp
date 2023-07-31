import React from "react";
import { Popover } from "antd";

// const content = (
//   <div>
//     <p>Content</p>
//     <p>Content</p>
//   </div>
// );

function Trial() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
    >
      <g>
      <rect
          width="192.211"
          height="242.841"
          x="5.238"
          y="4.49"
          fill="white"
          stroke="#000"
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="0.245"
          ry="0.4"
        ></rect>
      {/* 1 */}
        <Popover content={<p>Plot 1</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.427"
          d="M125.65 64.368l-.116 13.825 12.632.085-.516-12.057c-.023.014-.045.03-.066.046-.028.024-.043.036-.069.061l-.016.017c0 .002-.002.004-.004.006 0 .008-.003.032-.007.014v-.004c-.02.031-.04.064-.072.085-.015.009-.035-.01-.052-.015-.042-.012-.114-.037-.153-.05a4.864 4.864 0 00-.474-.15 4.15 4.15 0 00-.477-.078c-.135-.013-.27-.018-.404-.025l.045.014c.015.004.042-.002.046.011.065.012.1.028-.03.121.004.003.018 0 .02.005 0 .005-.01.001-.02-.004h-.002c-.01.008-.024 0-.037-.006-.102-.017-.204-.037-.306-.056-.14-.02-.281-.034-.42-.063a3.708 3.708 0 01-.504-.14 2.544 2.544 0 01-.254-.064c-.096-.029-.19-.062-.286-.092-.066-.02-.134-.033-.202-.047a70.402 70.402 0 01-.172-.013 4.104 4.104 0 01-.772-.117 12.849 12.849 0 01-.22-.066c-.171-.01-.343-.022-.515-.034-.115-.01-.23-.016-.346-.027-.086-.01-.174-.014-.26-.031-.069-.016-.139-.03-.209-.042a.798.798 0 01-.176-.04c-.051-.017-.105-.028-.157-.044-.052-.015-.104-.029-.155-.047a4.85 4.85 0 01-.295-.095c-.096-.038-.193-.073-.286-.117h-.003c-.01.017-.038.017-.068.02l-.136.005c-.017 0-.041.001-.063-.003l-.007.018c-.055.001-.114-.02-.167-.033l-.034-.012a2.958 2.958 0 00-.105-.011c-.006-.001-.052-.004-.059-.007-.011-.004-.022-.012-.033-.018l-.003-.048a.887.887 0 01-.136.004c-.048-.002-.096 0-.144-.006-.058-.01-.107-.044-.156-.075a.097.097 0 01-.042.005.038.038 0 01.004.01c0 .004-.007.003-.01.003l-.02-.002a.197.197 0 01-.012-.002h-.001c-.004 0-.008 0-.012-.002h-.003a1.284 1.284 0 01-.034-.008 3.284 3.284 0 01-.251-.02c-.01 0-.018-.003-.027-.004 0-.008-.008-.018-.002-.024.01-.008.08-.011.083-.012l.04-.002-.014-.002c-.004 0-.008.001-.008-.001v-.004h-.085c-.06 0-.121-.001-.182-.004l-.012-.001c.01.003.022.004.03.011a.013.013 0 01.004.006c.002.006 0 .015.002.021-.027.001-.011.002-.052-.005a7.17 7.17 0 01-.05-.008l-.2-.035-.118-.021a2.579 2.579 0 01-.046-.006l-.008-.002c-.01 0-.019-.003-.029-.004h-.002a10.28 10.28 0 01-.175-.022h-.006a1.008 1.008 0 01-.072-.009c-.002 0-.005 0-.004-.001a.07.07 0 01.01-.012l-.004-.01.011.003.001-.002.027.004.034.005-.066-.015-.123-.028c-.007-.002-.018 0-.022-.005v-.001c-.006-.001-.01-.003-.006-.008l-.002-.005a.432.432 0 01-.05-.023l-.012-.001-.101-.013c-.01-.002-.021-.001-.03-.006a.042.042 0 01-.016-.015 2.765 2.765 0 01-.082-.007c-.014-.001-.044-.004-.06-.008a.074.074 0 01-.018-.007c-.012-.008-.015-.02 0-.032.001-.002.004-.003.006-.004l-.98-.148-.003.004c.014.004.028.01.042.017.006.002.009.005.01.008l.015.002c.01.003.023.006.022.02 0 .005-.006.006-.01.009a.348.348 0 01-.108-.015l-.005-.002h-.002-.002l-.006-.002c-.002-.001-.005-.001-.006-.003a1.123 1.123 0 01-.033-.012.029.029 0 01-.017.003c-.003 0-.005-.002-.008-.003a.112.112 0 01-.02-.012l-.006.005-.005.002a.192.192 0 01-.033.005.077.077 0 01-.04-.009c-.01-.007-.022-.018-.015-.032 0-.002.004-.004.006-.006a.198.198 0 01.024-.008l-.581-.088zm11.845 1.983v-.001a.043.043 0 00-.007.011l.007-.01zm-11.22-1.881c-.006 0-.011.002-.017.003l.004.001c.006 0 .011.002.017.003l-.004-.007zm-.043.01h-.005c0 .002.002.002.004.004 0 0 .003 0 .004.002l-.002-.004-.001-.003zm.143.018l.004.001h.001l-.005-.001zm.03.007l-.001.001h.006l-.005-.002zm1.009.14v.004l.006.002c0-.001-.002-.003-.006-.005zm.034.004l-.013.001a.12.12 0 00-.012.003l.005.001.017.003.005-.008h-.002zm.132.049h-.004s.002.002.003 0h.001zm.343.074l.009.002.084.018.034.008s.035.007.028.021l.026.003h.001c-.001-.005 0-.008.01-.002h.004c.014-.003.03.004.043.006l.06.01.076.009c.005 0 .012-.003.014.002v.005l.065.012.196.034a5.49 5.49 0 00-.15-.04c-.002-.001-.056-.015-.065-.02-.004-.003-.011-.008-.008-.012a.04.04 0 01.013-.01h-.003a.592.592 0 00-.195-.038c-.066-.002-.132-.002-.198-.005l-.045-.003zm1.09.156l-.108.006-.011.001.066.006.054.003c-.005-.004-.007-.01 0-.016zm.13.016l.02.007h.003c.01 0 .02-.002.029-.003l-.031-.004H129.143zm.038.02h.001c.001 0 0 0 0 0zm.924.165l-.012.01a.075.075 0 00.026-.007c-.005 0-.01-.002-.014-.003zm4.792.761l.067.017h.006l-.003-.002v-.002a3.955 3.955 0 00-.052-.013H134.897zm2.417.392l.054.018c0-.003.003-.006.004-.008l-.059-.01z"
          clipPath="url(#clipPath2834)"
          transform="translate(23.947 55.378)"
          strokeOpacity="1"
          stroke="#fff5f5"
        ></path>
       </Popover>
       <Popover content={<p>Plot 1</p>} title="Title">
        <text
          x="154.69"
          y="128.952"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.69" y="128.952" strokeWidth="0.265">
            1
          </tspan>
        </text>
        </Popover>
        <path
          fill="white"
          strokeWidth="0.265"
          d="M125.599 64.39c12.167 3.148 12.238 3.149 12.238 3.149-.07-1.203 12.135.778-.07-1.203-3.37-.547-5.666-.917-7.428-1.2-.01.015-.038.015-.067.017-.045.002-.09.005-.136.006-.017 0-.041.001-.063-.003l-.007.018c-.055.001-.114-.02-.167-.033l-.035-.012a2.956 2.956 0 00-.105-.012c-.006 0-.052-.003-.059-.006-.011-.004-.022-.012-.033-.018l-.003-.048a.887.887 0 01-.135.004c-.048-.002-.096 0-.144-.006-.059-.01-.107-.045-.156-.075a.097.097 0 01-.043.005.038.038 0 01.004.01c0 .004-.007.003-.01.003l-.02-.002a.197.197 0 01-.012-.002h-.001c-.003 0-.007 0-.012-.002l-.003-.001a1.284 1.284 0 01-.034-.007 3.286 3.286 0 01-.251-.02c-.009 0-.017-.003-.026-.005-.001-.007-.008-.017-.002-.023.009-.008.08-.011.082-.012l.025-.002-.05-.008h-.04c-.062 0-.122 0-.183-.003l-.012-.001c.011.003.022.004.03.011a.013.013 0 01.004.005c.002.007 0 .015.002.022-.027 0-.01.002-.052-.005a7.17 7.17 0 01-.049-.008l-.2-.036-.119-.02a2.579 2.579 0 01-.045-.006l-.008-.002-.03-.004h-.001a10.28 10.28 0 01-.176-.022h-.005a1.008 1.008 0 01-.073-.01h-.004a.07.07 0 01.01-.012c0-.003-.003-.007-.004-.01h.001l.01.003.002-.002.026.004.035.004-.067-.014-.123-.028c-.007-.002-.018 0-.022-.006-.005-.001-.01-.003-.005-.008l-.002-.005a.425.425 0 01-.05-.023l-.012-.001-.102-.013c-.01-.002-.02-.001-.03-.006a.051.051 0 01-.014-.011l-.04-.007h-.003l-.04-.004c-.015-.001-.046-.004-.06-.008a.074.074 0 01-.019-.007l-.889-.139a.02.02 0 010 .006c0 .005-.006.006-.009.009a.348.348 0 01-.108-.015l-.005-.002h-.002-.002l-.006-.002-.006-.003-.033-.012a.03.03 0 01-.017.003c-.003 0-.005-.002-.008-.003a.112.112 0 01-.02-.012l-.006.005-.005.001a.192.192 0 01-.034.006.077.077 0 01-.04-.01c-.006-.004-.014-.011-.016-.02-.419-.064-.599-.09-.6-.09zm1.981.308h-.004s.002.002.003 0h.001zm.343.074l.009.002.084.018.034.008s.035.007.028.021l.026.003c0-.005.001-.008.01-.002h.005c.014-.003.029.004.043.006l.06.01.076.009c.005 0 .012-.003.014.002v.005l.065.012.196.034a5.49 5.49 0 00-.15-.04c-.002-.001-.056-.015-.065-.02-.004-.003-.011-.008-.008-.012a.052.052 0 01.01-.008l-.265-.042-.128-.003-.044-.003zm1.09.156l-.108.006-.011.001.066.006.054.003c-.005-.004-.007-.01 0-.016zm.135.017l.014.006h.015l-.03-.006zm.033.018v.001h.001c.001 0 0 0 0 0zm.924.166l-.012.01a.075.075 0 00.026-.007c-.005 0-.01-.002-.014-.003z"
          clipPath="url(#clipPath2854)"
          transform="translate(23.947 55.378)"
        ></path>
        
        {/* 2 */}
        <Popover content={<p>Plot 2</p>} title="Title">
        <path
          fill="green"
          strokeWidth="0.216"
          d="M149.474 139.762v-6.08h12.64V145.843h-12.64z"
          strokeOpacity="1"
          stroke="#fff5f5"
        ></path></Popover>
        <Popover content={<p>Plot 2</p>} title="Title">
        <text
          x="154.578"
          y="140.612"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.578" y="140.612" strokeWidth="0.265">
            2
          </tspan>
        </text></Popover>

        {/* 3 */}
        <Popover content={<p>Plot 3</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.219"
          d="M149.478 152.173v-6.268h12.64v12.536h-12.64z"
          strokeOpacity="1"
          stroke="#fff5f5"
        ></path></Popover>
        <Popover content={<p>Plot 3</p>} title="Title">
        <text
          x="154.596"
          y="153.355"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.596" y="153.355" strokeWidth="0.265">
            3
          </tspan>
        </text></Popover>

        {/* 4 */}
        <Popover content={<p>Plot 4</p>} title="Title">
        <path
          fill="red"
          strokeWidth="0.214"
          d="M149.478 164.521v-5.987h12.64v11.974h-12.64z"
          strokeOpacity="1"
          stroke="#fff5f5"
        ></path></Popover>
        <Popover content={<p>Plot 4</p>} title="Title">
        <text
          x="154.426"
          y="165.962"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.426" y="165.962" strokeWidth="0.265">
            4
          </tspan>
        </text></Popover>

        {/* 5 */}
        <Popover content={<p>Plot 5</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.209"
          d="M149.478 176.308V170.6h12.64v11.413h-12.64z"
          strokeOpacity="1"
          stroke="#fff5f5"
        ></path></Popover>
        <Popover content={<p>Plot 5</p>} title="Title">
        <text
          x="154.535"
          y="177.36"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.535" y="177.36" strokeWidth="0.265">
            5
          </tspan>
        </text></Popover>

        {/* 6 */}
        <Popover content={<p>Plot 6</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.209"
          d="M149.478 187.79v-5.683h12.64v11.366h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 6</p>} title="Title">
        <text
          x="154.582"
          y="189.147"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.582" y="189.147" strokeWidth="0.265">
            6
          </tspan>
        </text></Popover>
        
        {/* 7 */}
        <Popover content={<p>Plot 7</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.197"
          d="M149.384 202.032v-5.051h12.641v10.103h-12.641z"
        ></path></Popover>
        <Popover content={<p>Plot 7</p>} title="Title">
        <text
          x="154.29"
          y="203.38"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.29" y="203.38" strokeWidth="0.265">
            7
          </tspan>
        </text></Popover>

        {/* 8 */}
        <Popover content={<p>Plot 8</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.198"
          d="M149.43 212.322v-5.098h12.641v10.197h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 8</p>} title="Title">
        <text
          x="154.271"
          y="213.623"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.271" y="213.623" strokeWidth="0.265">
            8
          </tspan>
        </text></Popover>

        {/* 9 */}
        <Popover content={<p>Plot 9</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.205"
          d="M149.384 223.08v-5.473h12.641v10.946h-12.641z"
        ></path></Popover>
        <Popover content={<p>Plot 9</p>} title="Title">
        <text
          x="154.224"
          y="224.334"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="154.224" y="224.334" strokeWidth="0.265">
            9
          </tspan>
        </text></Popover>

        {/* 10 */}
        <Popover content={<p>Plot 10</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M129.024 220.853v-7.835h12.641v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 10</p>} title="Title">
        <text
          x="132.983"
          y="222.585"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="132.983" y="222.585" fill="#fff" strokeWidth="0.265">
            10
          </tspan>
        </text></Popover>

        {/* 11 */}
        <Popover content={<p>Plot 11</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M128.992 205.05v-7.835h12.64v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 11</p>} title="Title">
        <text
          x="132.702"
          y="206.585"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="132.702" y="206.585" fill="#fff" strokeWidth="0.265">
            11
          </tspan>
        </text></Popover>

        {/* 12 */}
        <Popover content={<p>Plot 12</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M129.054 185.537v-7.835h12.641v15.67h-12.641z"
        ></path></Popover>
        <Popover content={<p>Plot 12</p>} title="Title">
        <text
          x="132.98"
          y="187.298"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="132.98" y="187.298" fill="#fff" strokeWidth="0.265">
            12
          </tspan>
        </text></Popover>

        {/* 13 */}
        <Popover content={<p>Plot 13</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M129.054 169.776v-7.834h12.641v15.669h-12.641z"
        ></path></Popover>
        <Popover content={<p>Plot 13</p>} title="Title">
        <text
          x="132.98"
          y="171.488"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="132.98" y="171.488" fill="#fff" strokeWidth="0.265">
            13
          </tspan>
        </text></Popover>

        {/* 14 */}
        <Popover content={<p>Plot 14</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M129.004 153.966v-7.835h12.641V161.8h-12.641z"
        ></path></Popover>
        <Popover content={<p>Plot 14</p>} title="Title">
        <text
          x="132.725"
          y="155.177"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="132.725" y="155.177" fill="#fff" strokeWidth="0.265">
            14
          </tspan>
        </text></Popover>
        
        {/* 15 */}
        <Popover content={<p>Plot 15</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M129.004 138.205v-7.835h12.64v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 15</p>} title="Title">
        <text
          x="132.875"
          y="139.666"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="132.875" y="139.666" fill="#fff" strokeWidth="0.265">
            15
          </tspan>
        </text></Popover>

        {/* 16 */}
        <Popover content={<p>Plot 16</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M129.004 122.444v-7.834h12.64v15.669h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 16</p>} title="Title">
        <text
          x="132.923"
          y="124.285"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="132.923" y="124.285" fill="#fff" strokeWidth="0.265">
            16
          </tspan>
        </text></Popover>

        {/* 17 */}
        <Popover content={<p>Plot 17</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.243"
          d="M116.243 110.716v-3.833h25.35v7.665h-25.35z"
        ></path></Popover>
        <Popover content={<p>Plot 17</p>} title="Title">
        <text
          x="126.018"
          y="111.827"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="126.018" y="111.827" fill="#fff" strokeWidth="0.265">
            17
          </tspan>
        </text></Popover>

        {/* 18 */}
        <Popover content={<p>Plot 18</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.242"
          d="M116.243 103.01v-3.832h25.25v7.664h-25.25z"
        ></path></Popover>
        <Popover content={<p>Plot 18</p>} title="Title">
        <text
          x="126.018"
          y="104.321"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="126.018" y="104.321" fill="#fff" strokeWidth="0.265">
            18
          </tspan>
        </text></Popover>

        {/* 19 */}
        <Popover content={<p>Plot 19</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.242"
          d="M116.243 95.305v-3.832h25.15v7.664h-25.15z"
        ></path></Popover>
        <Popover content={<p>Plot 19</p>} title="Title">
        <text
          x="126.184"
          y="96.495"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="126.184" y="96.495" fill="#fff" strokeWidth="0.265">
            19
          </tspan>
        </text></Popover>
        
        {/* 20 */}
        <Popover content={<p>Plot 20</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.256"
          d="M116.195 87.111v-4.292h25.15v8.584h-25.15z"
        ></path></Popover>
        <Popover content={<p>Plot 20</p>} title="Title">
        <text
          x="125.917"
          y="88.577"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="125.917" y="88.577" fill="#fff" strokeWidth="0.265">
            20
          </tspan>
        </text></Popover>
        
        {/* 21 */}
        <Popover content={<p>Plot 21</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M116.295 122.444v-7.834h12.641v15.669h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 21</p>} title="Title">
        <text
          x="120.111"
          y="124.456"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="120.111" y="124.456" fill="#fff" strokeWidth="0.265">
            21
          </tspan>
        </text></Popover>

        {/* 22 */}
        <Popover content={<p>Plot 22</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M116.295 138.205v-7.835h12.641v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 22</p>} title="Title">
        <text
          x="120.221"
          y="139.766"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="120.221" y="139.766" fill="#fff" strokeWidth="0.265">
            22
          </tspan>
        </text></Popover>
        
        {/* 23 */}
        <Popover content={<p>Plot 23</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M116.295 153.966v-7.835h12.641V161.8h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 23</p>} title="Title">
        <text
          x="120.117"
          y="155.177"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="120.117" y="155.177" fill="#fff" strokeWidth="0.265">
            23
          </tspan>
        </text></Popover>

        {/* 24 */}
        <Popover content={<p>Plot 24</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M116.295 169.776v-7.834h12.641v15.669h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 24</p>} title="Title">
        <text
          x="120.121"
          y="171.338"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="120.121" y="171.338" fill="#fff" strokeWidth="0.265">
            24
          </tspan>
        </text></Popover>

        {/* 25 */}
        <Popover content={<p>Plot 25</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M116.295 185.537v-7.835h12.641v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 25</p>} title="Title">
        <text
          x="120.121"
          y="187.298"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="120.121" y="187.298" fill="#fff" strokeWidth="0.265">
            25
          </tspan>
        </text></Popover>

        {/* 26 */}
        <Popover content={<p>Plot 26</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M116.195 205.05v-7.835h12.641v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 26</p>} title="Title">
        <text
          x="120.105"
          y="206.947"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="120.105" y="206.947" fill="#fff" strokeWidth="0.265">
            26
          </tspan>
        </text></Popover>

        {/* 27 */}
        <Popover content={<p>Plot 27</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M116.217 220.853v-7.835h12.641v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 27</p>} title="Title">
        <text
          x="120.176"
          y="222.514"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="120.176" y="222.514" fill="#fff" strokeWidth="0.265">
            27
          </tspan>
        </text></Popover>

      {/* 28 */}
      <Popover content={<p>Plot 28</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.699 220.795v-7.835h12.64v15.67H95.7z"
        ></path>
      </Popover>
      <Popover content={<p>Plot 28</p>} title="Title">
        <text
          x="99.657"
          y="222.527"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.657" y="222.527" fill="#fff" strokeWidth="0.265">
            28
          </tspan>
        </text>
      </Popover>
        
        {/* 29 */}
      <Popover content={<p>Plot 29</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.666 204.992v-7.835h12.641v15.67h-12.64z"
        ></path></Popover>
        <Popover content={<p>Plot 29</p>} title="Title">
        <text
          x="99.376"
          y="206.527"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.376" y="206.527" fill="#fff" strokeWidth="0.265">
            29
          </tspan>
        </text></Popover>

        {/* 30 */}
           
        <Popover content={<p>Plot 30</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.528 185.479v-7.835h12.641v15.67H95.53z"
        ></path></Popover> 

           
        <Popover content={<p>Plot 30</p>} title="Title">
        <text
          x="99.454"
          y="187.24"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.454" y="187.24" fill="#fff" strokeWidth="0.265">
            30
          </tspan>
        </text></Popover> 

        {/* 31 */}
           
        <Popover content={<p>Plot 31</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.528 169.718v-7.834h12.641v15.669H95.53z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 31</p>} title="Title">
        <text
          x="99.454"
          y="171.43"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.454" y="171.43" fill="#fff" strokeWidth="0.265">
            31
          </tspan>
        </text></Popover> 

        {/* 32 */}
           
        <Popover content={<p>Plot 32</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.478 153.908v-7.835h12.641v15.669H95.48z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 32</p>} title="Title">
        <text
          x="99.2"
          y="155.119"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.2" y="155.119" fill="#fff" strokeWidth="0.265">
            32
          </tspan>
        </text></Popover> 

        {/* 33 */}
           
        <Popover content={<p>Plot 33</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.478 138.147v-7.835h12.641v15.67H95.48z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 33</p>} title="Title">
        <text
          x="99.35"
          y="139.608"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.35" y="139.608" fill="#fff" strokeWidth="0.265">
            33
          </tspan>
        </text></Popover> 

        {/* 34 */}
           
        <Popover content={<p>Plot 34</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.478 122.386v-7.834h12.641v15.669H95.48z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 34</p>} title="Title">
        <text
          x="99.398"
          y="124.227"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.398" y="124.227" fill="#fff" strokeWidth="0.265">
            34
          </tspan>
        </text></Popover> 

        {/* 35 */}
           
        <Popover content={<p>Plot 35</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.478 106.626V98.79h12.641v15.669H95.48z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 35</p>} title="Title">
        <text
          x="99.593"
          y="107.804"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.593" y="107.804" fill="#fff" strokeWidth="0.265">
            35
          </tspan>
        </text></Popover> 

        {/* 36 */}
           
        <Popover content={<p>Plot 36</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M95.478 90.915V83.08h12.641v15.67H95.48z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 36</p>} title="Title">
        <text
          x="99.284"
          y="92.399"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="99.284" y="92.399" fill="#fff" strokeWidth="0.265">
            36
          </tspan>
        </text></Popover> 

        {/* 37 */}
           
        <Popover content={<p>Plot 37</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.77 90.915V83.08h12.64v15.67H82.77z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 37</p>} title="Title">
        <text
          x="86.67"
          y="92.388"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.67" y="92.388" fill="#fff" strokeWidth="0.265">
            37
          </tspan>
        </text></Popover> 

        {/* 38 */}
           
        <Popover content={<p>Plot 38</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.776 106.638v-7.834h12.64v15.669h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 38</p>} title="Title">
        <text
          x="86.381"
          y="107.798"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.381" y="107.798" fill="#fff" strokeWidth="0.265">
            38
          </tspan>
        </text></Popover> 

        {/* 39 */}
           
        <Popover content={<p>Plot 39</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.77 122.386v-7.834h12.64v15.669H82.77z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 39</p>} title="Title">
        <text
          x="86.585"
          y="124.398"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.585" y="124.398" fill="#fff" strokeWidth="0.265">
            39
          </tspan>
        </text></Popover> 

        {/* 40 */}
           
        <Popover content={<p>Plot 40</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.77 138.147v-7.835h12.64v15.67H82.77z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 40</p>} title="Title">
        <text
          x="86.695"
          y="139.708"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.695" y="139.708" fill="#fff" strokeWidth="0.265">
            40
          </tspan>
        </text></Popover> 

        {/* 41 */}
           
        <Popover content={<p>Plot 41</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.77 153.908v-7.835h12.64v15.669H82.77z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 41</p>} title="Title">
        <text
          x="86.591"
          y="155.119"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.591" y="155.119" fill="#fff" strokeWidth="0.265">
            41
          </tspan>
        </text></Popover> 

        {/* 42 */}
           
        <Popover content={<p>Plot 42</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.77 169.718v-7.834h12.64v15.669H82.77z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 42</p>} title="Title">
        <text
          x="86.595"
          y="171.28"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.595" y="171.28" fill="#fff" strokeWidth="0.265">
            42
          </tspan>
        </text></Popover> 

        {/* 43 */}
           
        <Popover content={<p>Plot 43</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.77 185.479v-7.835h12.64v15.67H82.77z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 43</p>} title="Title">
        <text
          x="86.595"
          y="187.24"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.595" y="187.24" fill="#fff" strokeWidth="0.265">
            43
          </tspan>
        </text></Popover> 

        {/* 44 */}
           
        <Popover content={<p>Plot 44</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.87 204.992v-7.835h12.64v15.67H82.87z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 44</p>} title="Title">
        <text
          x="86.779"
          y="206.889"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.779" y="206.889" fill="#fff" strokeWidth="0.265">
            44
          </tspan>
        </text></Popover> 

        {/* 45 */}
           
        <Popover content={<p>Plot 45</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M82.892 220.795v-7.835h12.64v15.67h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 45</p>} title="Title">
        <text
          x="86.85"
          y="222.456"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="86.85" y="222.456" fill="#fff" strokeWidth="0.265">
            45
          </tspan>
        </text></Popover> 

        {/* 46 */}
           
        <Popover content={<p>Plot 46</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M63.478 220.882v-7.835H76.12v15.67H63.48z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 46</p>} title="Title">
        <text
          x="67.437"
          y="222.614"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.437" y="222.614" fill="#fff" strokeWidth="0.265">
            46
          </tspan>
        </text></Popover> 

        {/* 47 */}
           
        <Popover content={<p>Plot 47</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M63.446 205.079v-7.835h12.64v15.67h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 47</p>} title="Title">
        <text
          x="67.156"
          y="206.614"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.156" y="206.614" fill="#fff" strokeWidth="0.265">
            47
          </tspan>
        </text></Popover> 

        {/* 48 */}
           
        <Popover content={<p>Plot 48</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M63.308 185.566v-7.835h12.64v15.67h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 48</p>} title="Title">
        <text
          x="67.233"
          y="187.327"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.233" y="187.327" fill="#fff" strokeWidth="0.265">
            48
          </tspan>
        </text></Popover> 

        {/* 49 */}
           
        <Popover content={<p>Plot 49</p>} title="Title">
        <path
          fill="green"
          strokeWidth="0.245"
          d="M63.308 169.805v-7.834h12.64v15.669h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 49</p>} title="Title">
        <text
          x="67.233"
          y="171.517"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.233" y="171.517" fill="#fff" strokeWidth="0.265">
            49
          </tspan>
        </text></Popover> 

        {/* 50 */}
           
        <Popover content={<p>Plot 50</p>} title="Title">
        <path
          fill="green"
          strokeWidth="0.245"
          d="M63.258 153.995v-7.835h12.64v15.669h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 50</p>} title="Title">
        <text
          x="66.979"
          y="155.206"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="66.979" y="155.206" fill="#fff" strokeWidth="0.265">
            50
          </tspan>
        </text></Popover> 

        {/* 51 */}
           
        <Popover content={<p>Plot 51</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M63.258 138.234v-7.835h12.64v15.67h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 51</p>} title="Title">
        <text
          x="67.129"
          y="139.695"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.129" y="139.695" fill="#fff" strokeWidth="0.265">
            51
          </tspan>
        </text></Popover> 

          {/* 52 */}
             
          <Popover content={<p>Plot 52</p>} title="Title">
          <path
          fill="#00f"
          strokeWidth="0.245"
          d="M63.258 122.473v-7.834h12.64v15.669h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 52</p>} title="Title">
        <text
          x="67.177"
          y="124.314"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.177" y="124.314" fill="#fff" strokeWidth="0.265">
            52
          </tspan>
        </text></Popover> 

          {/* 53 */}
             
        <Popover content={<p>Plot 53</p>} title="Title">
          <path
          fill="red"
          strokeWidth="0.245"
          d="M63.258 106.713v-7.835h12.64v15.67h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 53</p>} title="Title">
        <text
          x="67.373"
          y="107.891"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.373" y="107.891" fill="#fff" strokeWidth="0.265">
            53
          </tspan>
        </text></Popover> 

        {/* 54 */}
           
        <Popover content={<p>Plot 54</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M63.258 91.002v-7.834h12.64v15.669h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 54</p>} title="Title">
        <text
          x="67.063"
          y="92.486"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="67.063" y="92.486" fill="#fff" strokeWidth="0.265">
            54
          </tspan>
        </text></Popover> 

        {/* 55 */}
           
        <Popover content={<p>Plot 55</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.549 91.002v-7.834H63.19v15.669H50.549z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 55</p>} title="Title">
        <text
          x="54.45"
          y="92.475"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.45" y="92.475" fill="#fff" strokeWidth="0.265">
            55
          </tspan>
        </text></Popover> 

        {/* 56 */}
           
        <Popover content={<p>Plot 56</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.555 106.725v-7.834h12.641v15.669h-12.64z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 56</p>} title="Title">
        <text
          x="54.161"
          y="107.885"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.161" y="107.885" fill="#fff" strokeWidth="0.265">
            56
          </tspan>
        </text></Popover> 

        {/* 57 */}
           
        <Popover content={<p>Plot 57</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.549 122.473v-7.834H63.19v15.669H50.549z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 57</p>} title="Title">
        <text
          x="54.364"
          y="124.485"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.364" y="124.485" fill="#fff" strokeWidth="0.265">
            57
          </tspan>
        </text></Popover> 

        {/* 58 */}
           
        <Popover content={<p>Plot 58</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.549 138.234v-7.835H63.19v15.67H50.549z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 58</p>} title="Title">
        <text
          x="54.475"
          y="139.795"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.475" y="139.795" fill="#fff" strokeWidth="0.265">
            58
          </tspan>
        </text></Popover> 

        {/* 59 */}
           
        <Popover content={<p>Plot 59</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.549 153.995v-7.835H63.19v15.669H50.549z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 59</p>} title="Title">
        <text
          x="54.371"
          y="155.206"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.371" y="155.206" fill="#fff" strokeWidth="0.265">
            59
          </tspan>
        </text></Popover> 

        {/* 60 */}
           
        <Popover content={<p>Plot 60</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.549 169.805v-7.834H63.19v15.669H50.549z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 60</p>} title="Title">
        <text
          x="54.375"
          y="171.367"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.375" y="171.367" fill="#fff" strokeWidth="0.265">
            60
          </tspan>
        </text></Popover> 
        
        {/* 61 */}
           
        <Popover content={<p>Plot 61</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.549 185.566v-7.835H63.19v15.67H50.549z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 61</p>} title="Title">
        <text
          x="54.375"
          y="187.327"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.375" y="187.327" fill="#fff" strokeWidth="0.265">
            61
          </tspan>
        </text></Popover> 

        {/* 62 */}
           
        <Popover content={<p>Plot 62</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.65 205.079v-7.835h12.64v15.67H50.65z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 62</p>} title="Title">
        <text
          x="54.559"
          y="206.976"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.559" y="206.976" fill="#fff" strokeWidth="0.265">
            62
          </tspan>
        </text></Popover> 

        {/* 63 */}
           
        <Popover content={<p>Plot 63</p>} title="Title">
        <path
          fill="#00f"
          strokeWidth="0.245"
          d="M50.671 220.882v-7.835h12.641v15.67H50.671z"
        ></path></Popover> 
           
        <Popover content={<p>Plot 63</p>} title="Title">
        <text
          x="54.629"
          y="222.543"
          fill="#fff"
          strokeWidth="0.265"
          fontSize="4.233"
          xmlSpace="preserve"
        >
          <tspan x="54.629" y="222.543" fill="#fff" strokeWidth="0.265">
            63
          </tspan>
        </text></Popover>         
        

        {/* road */}
        <rect
          width="6.253"
          height="147.689"
          x="76.358"
          y="80.995"
          fill="#000"
          strokeWidth="0.265"
          ry="0"
        ></rect>
        <rect
          width="91.587"
          height="3.201"
          x="50.115"
          y="193.667"
          fill="#000"
          strokeWidth="0.149"
          ry="0"
        ></rect>
        <rect
          width="26.13"
          height="3.201"
          x="136.103"
          y="193.674"
          fill="#000"
          strokeWidth="0.08"
          ry="0"
        ></rect>
        <rect
          width="21.125"
          height="3.201"
          x="161.77"
          y="193.674"
          fill="#000"
          strokeWidth="0.072"
          ry="0"
        ></rect>
        <rect
          width="5.079"
          height="21.574"
          x="250.361"
          y="166.513"
          fill="#000"
          strokeWidth="0.091"
          ry="0"
          transform="matrix(.99263 .1212 -.374 .92743 0 0)"
        ></rect>
        <rect
          width="6.536"
          height="153.067"
          x="43.747"
          y="75.784"
          fill="#000"
          strokeWidth="0.275"
          ry="0"
        ></rect>
        <rect
          width="7.385"
          height="148.114"
          x="108.491"
          y="80.595"
          fill="#000"
          strokeWidth="0.265"
          ry="0"
        ></rect>
        <rect
          width="7.285"
          height="79.267"
          x="141.97"
          y="117.313"
          fill="#000"
          strokeWidth="0.192"
          ry="0"
        ></rect>
        <rect
          width="7.285"
          height="34.039"
          x="141.913"
          y="194.601"
          fill="#000"
          strokeWidth="0.126"
          ry="0"
        ></rect>
        <rect
          width="98.266"
          height="6.805"
          x="43.761"
          y="75.592"
          fill="#000"
          strokeWidth="0.273"
          ry="0.4"
        ></rect>
        <path
          fill="#fff"
          strokeWidth="0.271"
          d="M141.827 117.295c7.605 2.477 7.605 2.502 7.605 2.502l-.053-2.552z"
        ></path>

        {/* compass */}
        <path
          fill="#000"
          strokeWidth="0.265"
          d="M33.606 17.866L9.247 28.427 30.03 11.904l-10.561-24.36L35.99 8.327 60.35-2.234 39.568 14.288 50.13 38.648z"
          transform="matrix(.4496 .3273 -.26771 .54317 18 13.122)"
        ></path>

        <text
          x="25.537"
          y="61.581"
          fill="#000"
          strokeWidth="0.455"
          fontSize="7.274"
          transform="scale(1.10615 .90404)"
          xmlSpace="preserve"
        >
          <tspan x="25.537" y="61.581" strokeWidth="0.455">
            S
          </tspan>
        </text>

        <text
          x="6.6"
          y="37.132"
          fill="#000"
          strokeWidth="0.455"
          fontSize="7.274"
          transform="scale(1.10615 .90404)"
          xmlSpace="preserve"
        >
          <tspan x="6.6" y="37.132" strokeWidth="0.455">
            W
          </tspan>
        </text>
        
        <text
          x="23.821"
          y="13.572"
          fill="#000"
          strokeWidth="0.455"
          fontSize="7.274"
          transform="scale(1.10615 .90404)"
          xmlSpace="preserve"
        >
          <tspan x="23.821" y="13.572" strokeWidth="0.455">
            N
          </tspan>
        </text>

        <text
          x="41.283"
          y="37.132"
          fill="#000"
          strokeWidth="0.455"
          fontSize="7.274"
          transform="scale(1.10615 .90404)"
          xmlSpace="preserve"
        >
          <tspan x="41.283" y="37.132" strokeWidth="0.455">
            E
          </tspan>
        </text>
      </g>
     </svg>
  );
}

export default Trial;
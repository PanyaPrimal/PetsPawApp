import React from "react";
import '@styles/globals.css';

export const LikeSvg = ({
	size = 30,
	...props
}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
		/>
	</svg>
);

export const DislikeSvg = ({ 
	size = 30, 
	...props
}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
		/>
	</svg>
);


export const FavoriteHeartSvgEmpty = ({ 
	size = 30, 
	...props
}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68122 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"
		/>
	</svg>
);

export const FavoriteHeartSvgFilled = ({ 
	size = 30,
	...props
	}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path 
			d="M8.07107 0C3.61354 0 0 3.61354 0 8.07107C0 10.2116 0.850339 12.2646 2.36396 13.7782L14.2929 25.7071C14.6834 26.0976 15.3166 26.0976 15.7071 25.7071L27.636 13.7782C29.1497 12.2646 30 10.2116 30 8.07107C30 3.61354 26.3865 0 21.9289 0C19.7884 0 17.7354 0.850341 16.2218 2.36396L15 3.58579L13.7782 2.36396C12.2646 0.850343 10.2116 0 8.07107 0Z" />
	</svg>
);

export const LeftArrowSvg = ({
	...props
}) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path 
			d="M4.70975 10.9901L13.3095 19.5896C13.8565 20.1369 14.7435 20.1369 15.2903 19.5896C15.8371 19.0427 15.8371 18.1558 15.2903 17.6091L7.6808 9.99988L15.29 2.39096C15.8369 1.84391 15.8369 0.957107 15.29 0.410284C14.7432 -0.136761 13.8563 -0.136761 13.3093 0.410284L4.70953 9.00985C4.43611 9.28339 4.29956 9.64153 4.29956 9.99983C4.29956 10.3583 4.43638 10.7167 4.70975 10.9901Z"
		/>
	</svg>
);

export const SearchSvg = ({
	color,
	...props
}) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path 
			fill={color}
			d="M19.361 18.2168L14.601 13.2662C15.8249 11.8113 16.4954 9.98069 16.4954 8.07499C16.4954 3.62251 12.8729 0 8.42045 0C3.96797 0 0.345459 3.62251 0.345459 8.07499C0.345459 12.5275 3.96797 16.15 8.42045 16.15C10.092 16.15 11.6849 15.6458 13.0467 14.6888L17.8429 19.677C18.0434 19.8852 18.313 20 18.602 20C18.8755 20 19.1349 19.8957 19.3319 19.7061C19.7504 19.3034 19.7637 18.6357 19.361 18.2168ZM8.42045 2.10652C11.7115 2.10652 14.3889 4.78391 14.3889 8.07499C14.3889 11.3661 11.7115 14.0435 8.42045 14.0435C5.12937 14.0435 2.45198 11.3661 2.45198 8.07499C2.45198 4.78391 5.12937 2.10652 8.42045 2.10652Z" />
	</svg>
);

export const CloseSvg = ({ 
	color,
	...props
}) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
  	<path
			d="M9.05691 9.99997L1.52832 2.47137L2.47113 1.52856L9.99972 9.05716L17.5283 1.52856L18.4711 2.47137L10.9425 9.99997L18.4711 17.5286L17.5283 18.4714L9.99972 10.9428L2.47113 18.4714L1.52832 17.5286L9.05691 9.99997Z"
			fill={color}
		/>
	</svg>
);

export const DescendSvg = ({ 
	color = "#FF868E",
	...props
}) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill={color}
			d="M3.80474 19.319V0H5.13807V19.319L8 16.1995L8.94281 17.2272L4.94281 21.5872C4.81778 21.7234 4.64822 21.8 4.4714 21.8C4.29459 21.8 4.12502 21.7234 4 21.5872L0 17.2272L0.942809 16.1995L3.80474 19.319ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 0 15.1381 0C13.2971 0 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"
		/>
	</svg>
);

export const AscendSvg = ({ 
	color = "#FF868E",
	...props
}) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill={color}
			d="M4 0.212836C4.26035 -0.0709453 4.68246 -0.0709453 4.94281 0.212836L8.94281 4.57284L8 5.6005L5.13807 2.48099V21.8H3.80474V2.48099L0.942809 5.6005L0 4.57284L4 0.212836ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 1.08282e-08 15.1381 1.08282e-08C13.2971 1.08282e-08 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"
		/>
	</svg>
);

export const UploadSvg = ({ 
	color = "#FF868E",
	...props
}) => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill={color}
			d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
		/>
	</svg>
);

export const RefreshSvg = ({ 
	color = "#FF868E",
	...props 
}) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill={color}
			d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z"
		/>
	</svg>
);

export const SuccessSvg = ({ ...props }) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill="#97EAB9"
			d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z"
		/>
	</svg>
);

export const ErrorSvg = ({ ...props }) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill="#FF868E"
			d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z"
		/>
	</svg>
);

export const LoadingSvg = ({ ...props }) => (
	<svg
    className="loading-svg"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#clip0_1_1565)">
      <circle 
				cx="8"
				cy="8"
				r="7"
				stroke="url(#paint0_angular_1_1565)"
				strokeWidth="2"
			/>
    </g>
    <defs>
      <radialGradient
        id="paint0_angular_1_1565"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8 8) rotate(90) scale(8)"
      >
        <stop stopColor="#FF868E" />
        <stop offset="1" stopColor="#FF868E" stopOpacity="0" />
      </radialGradient>
      <clipPath id="clip0_1_1565">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PawSvg = ({ ...props }) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
    {...props}
	>
		<path
			d="M7.84082 12.4577C7.84082 9.90778 9.9079 7.8407 12.4578 7.8407L19.3832 7.8407C21.9331 7.8407 24.0002 9.90778 24.0002 12.4577C24.0002 15.0075 21.9331 17.0746 19.3832 17.0746H12.4578C9.9079 17.0746 7.84082 15.0075 7.84082 12.4577Z"
			fill="#FF868E"
		/>
		<path
			d="M12.4578 24C9.9079 24 7.84082 21.9329 7.84082 19.383L7.84082 12.4576C7.84082 9.90772 9.9079 7.84063 12.4578 7.84063V7.84063C15.0077 7.84063 17.0747 9.90772 17.0747 12.4576V19.383C17.0747 21.9329 15.0077 24 12.4578 24V24Z"
			fill="#FF868E"
		/>
		<path
			d="M11.5427 2.8856C11.5427 4.47927 10.2508 5.7712 8.65709 5.7712C7.06341 5.7712 5.77148 4.47927 5.77148 2.8856C5.77148 1.29193 7.06341 0 8.65709 0C10.2508 0 11.5427 1.29193 11.5427 2.8856Z"
			fill="#FF868E"
		/>
		<path
			d="M5.7712 16.7366C5.7712 18.3302 4.47927 19.6222 2.8856 19.6222C1.29193 19.6222 0 18.3302 0 16.7366C0 15.1429 1.29193 13.851 2.8856 13.851C4.47927 13.851 5.7712 15.1429 5.7712 16.7366Z"
			fill="#FF868E"
		/>
		<path
			d="M19.6218 2.8856C19.6218 4.47927 18.3299 5.7712 16.7362 5.7712C15.1425 5.7712 13.8506 4.47927 13.8506 2.8856C13.8506 1.29193 15.1425 0 16.7362 0C18.3299 0 19.6218 1.29193 19.6218 2.8856Z"
			fill="#FF868E"
		/>
		<path
			d="M5.7712 8.65684C5.7712 10.2505 4.47927 11.5424 2.8856 11.5424C1.29193 11.5424 0 10.2505 0 8.65684C0 7.06317 1.29193 5.77124 2.8856 5.77124C4.47927 5.77124 5.7712 7.06317 5.7712 8.65684Z"
			fill="#FF868E"
		/>
	</svg>
);

export const PetsPawTextSvg = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="73"
    height="13"
    viewBox="0 0 73 13"
    {...props}
  >
    <path d="M0.894531 12.8001L0.894531 0.435303L6.69293 0.435303C7.66573 0.435303 8.45933 0.620903 9.07373 0.992104C9.70093 1.3633 10.1681 1.8689 10.4753 2.5089C10.7825 3.1489 10.9361 3.8785 10.9361 4.6977C10.9361 5.5297 10.7569 6.2657 10.3985 6.9057C10.0529 7.5457 9.55373 8.0449 8.90093 8.4033C8.26093 8.7489 7.49933 8.9217 6.61613 8.9217H3.48653L3.48653 12.8001H0.894531ZM3.48653 6.8673H6.07853C6.82093 6.8673 7.37773 6.6753 7.74893 6.2913C8.13293 5.8945 8.32493 5.3633 8.32493 4.6977C8.32493 3.9809 8.14573 3.4369 7.78733 3.0657C7.42893 2.6817 6.89133 2.4897 6.17453 2.4897L3.48653 2.4897L3.48653 6.8673Z"
    fill={color}/>
    <path d="M17.1119 12.9921C15.5375 12.9921 14.2895 12.6017 13.3679 11.8209C12.4463 11.0273 11.9855 9.8305 11.9855 8.2305C11.9855 6.7841 12.3695 5.6385 13.1375 4.7937C13.9183 3.9361 15.0767 3.5073 16.6127 3.5073C18.0207 3.5073 19.0959 3.8785 19.8383 4.6209C20.5935 5.3505 20.9711 6.3105 20.9711 7.5009V9.1521L14.3855 9.1521C14.5263 9.8817 14.8591 10.3809 15.3839 10.6497C15.9215 10.9185 16.6767 11.0529 17.6495 11.0529C18.1359 11.0529 18.6287 11.0081 19.1279 10.9185C19.6399 10.8289 20.0751 10.7137 20.4335 10.5729V12.4161C20.0111 12.6081 19.5183 12.7489 18.9551 12.8385C18.3919 12.9409 17.7775 12.9921 17.1119 12.9921ZM14.3855 7.5585H18.7055V7.0593C18.7055 6.5345 18.5519 6.1249 18.2447 5.8305C17.9375 5.5233 17.4191 5.3697 16.6895 5.3697C15.8319 5.3697 15.2303 5.5425 14.8847 5.8881C14.5519 6.2337 14.3855 6.7905 14.3855 7.5585Z"
    fill={color}/>
    <path d="M26.3854 12.9921C25.3358 12.9921 24.555 12.7169 24.043 12.1665C23.5438 11.6161 23.2942 10.8673 23.2942 9.9201V5.6961H22.0078V3.6993H23.2942V1.7409L25.8862 0.972903V3.6993H28.1902L28.0366 5.6961H25.8862V9.7473C25.8862 10.2465 26.0014 10.5921 26.2318 10.7841C26.4622 10.9633 26.8206 11.0529 27.307 11.0529C27.6654 11.0529 28.0366 10.9889 28.4206 10.8609V12.6465C28.139 12.7617 27.8318 12.8449 27.499 12.8961C27.1662 12.9601 26.795 12.9921 26.3854 12.9921Z"
    fill={color}/>
    <path d="M32.9572 12.9921C32.2788 12.9921 31.6324 12.9409 31.018 12.8385C30.4036 12.7489 29.9108 12.6337 29.5396 12.4929V10.3425C29.9876 10.5217 30.4932 10.6625 31.0564 10.7649C31.6196 10.8545 32.138 10.8993 32.6116 10.8993C33.2516 10.8993 33.6996 10.8609 33.9556 10.7841C34.2244 10.7073 34.3588 10.5345 34.3588 10.2657C34.3588 9.9585 34.154 9.7345 33.7444 9.5937C33.3476 9.4529 32.7524 9.2545 31.9588 8.9985C31.1268 8.7169 30.4868 8.3777 30.0388 7.9809C29.5908 7.5841 29.3668 6.9953 29.3668 6.2145C29.3668 5.3441 29.6804 4.6785 30.3076 4.2177C30.9476 3.7441 31.9716 3.5073 33.3796 3.5073C33.9428 3.5073 34.474 3.5521 34.9732 3.6417C35.4724 3.7185 35.8948 3.8145 36.2404 3.9297V6.0609C35.8948 5.8945 35.498 5.7729 35.05 5.6961C34.602 5.6065 34.186 5.5617 33.802 5.5617C33.2516 5.5617 32.81 5.6001 32.4772 5.6769C32.1572 5.7537 31.9972 5.9201 31.9972 6.1761C31.9972 6.4577 32.17 6.6561 32.5156 6.7713C32.874 6.8865 33.4244 7.0593 34.1668 7.2897C34.8964 7.5073 35.466 7.7441 35.8756 8.0001C36.2852 8.2561 36.5732 8.5633 36.7396 8.9217C36.906 9.2673 36.9892 9.7025 36.9892 10.2273C36.9892 12.0705 35.6452 12.9921 32.9572 12.9921Z"
    fill={color}/>
    <path d="M38.7883 12.8001V0.435303L44.5867 0.435303C45.5595 0.435303 46.3531 0.620903 46.9675 0.992104C47.5947 1.3633 48.0619 1.8689 48.3691 2.5089C48.6763 3.1489 48.8299 3.8785 48.8299 4.6977C48.8299 5.5297 48.6507 6.2657 48.2923 6.9057C47.9467 7.5457 47.4475 8.0449 46.7947 8.4033C46.1547 8.7489 45.3931 8.9217 44.5099 8.9217H41.3803V12.8001H38.7883ZM41.3803 6.8673H43.9723C44.7147 6.8673 45.2715 6.6753 45.6427 6.2913C46.0267 5.8945 46.2187 5.3633 46.2187 4.6977C46.2187 3.9809 46.0395 3.4369 45.6811 3.0657C45.3227 2.6817 44.7851 2.4897 44.0683 2.4897H41.3803V6.8673Z"
    fill={color}/>
    <path d="M52.7491 12.9921C52.1731 12.9921 51.6355 12.8897 51.1363 12.6849C50.6499 12.4673 50.2531 12.1537 49.9459 11.7441C49.6515 11.3217 49.5043 10.7969 49.5043 10.1697C49.5043 9.2737 49.8179 8.5569 50.4451 8.0193C51.0851 7.4817 52.0259 7.2129 53.2675 7.2129H55.9555V6.9633C55.9555 6.4001 55.7955 6.0033 55.4755 5.7729C55.1683 5.5425 54.5411 5.4273 53.5939 5.4273C52.5571 5.4273 51.5587 5.5873 50.5987 5.9073V4.0833C51.0211 3.9169 51.5331 3.7825 52.1347 3.6801C52.7491 3.5649 53.4147 3.5073 54.1315 3.5073C55.5011 3.5073 56.5571 3.7889 57.2995 4.3521C58.0547 4.9025 58.4323 5.7921 58.4323 7.0209V12.8001H56.1859L56.0515 11.9745C55.6931 12.2945 55.2515 12.5441 54.7267 12.7233C54.2019 12.9025 53.5427 12.9921 52.7491 12.9921ZM53.4595 11.2833C54.0355 11.2833 54.5347 11.1873 54.9571 10.9953C55.3795 10.8033 55.7123 10.5601 55.9555 10.2657V8.8257H53.3251C52.3139 8.8257 51.8083 9.2417 51.8083 10.0737C51.8083 10.8801 52.3587 11.2833 53.4595 11.2833Z"
    fill={color}/>
    <path d="M62.048 12.8001L59.648 3.6993L62.24 3.6993L63.6224 9.6129L65.1392 4.8705V3.6993H67.1168L68.8448 9.6129L70.1888 3.6993H72.7616L70.3808 12.8001H68L66.2528 7.4817L64.4672 12.8001H62.048Z"
    fill={color}/>
  </svg>
)

export const ThemeEyeOpen = ({ ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 16 16"
    {...props}
  >
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M1.11701 7.99997C1.11728 8.00055 1.11756 8.00113 1.11783 8.00171C1.18157 8.13691 1.27966 8.33326 1.41401 8.57036C1.68332 9.04561 2.09499 9.67864 2.66308 10.3099C3.79852 11.5715 5.53171 12.8 7.99998 12.8C10.4683 12.8 12.2015 11.5715 13.3369 10.3099C13.905 9.67864 14.3167 9.04561 14.586 8.57036C14.7203 8.33326 14.8184 8.13691 14.8822 8.00171C14.8824 8.00113 14.8827 8.00054 14.883 7.99996C14.8827 7.99939 14.8824 7.99881 14.8822 7.99822C14.8184 7.86303 14.7203 7.66667 14.586 7.42957C14.3167 6.95432 13.905 6.3213 13.3369 5.69008C12.2015 4.42848 10.4683 3.19997 7.99998 3.19997C5.53171 3.19997 3.79852 4.42848 2.66308 5.69008C2.09499 6.3213 1.68332 6.95432 1.41401 7.42957C1.27966 7.66667 1.18157 7.86302 1.11783 7.99822C1.11756 7.9988 1.11728 7.99939 1.11701 7.99997ZM15.4667 7.99997C15.9619 7.80189 15.9618 7.80166 15.9617 7.80141L15.9614 7.80081L15.9608 7.79924L15.9589 7.79465L15.9528 7.77976C15.9476 7.76734 15.9403 7.74998 15.9308 7.72801C15.9117 7.68408 15.8839 7.62165 15.847 7.54338C15.7732 7.38691 15.663 7.1666 15.514 6.90369C15.2167 6.37895 14.7617 5.67864 14.1297 4.97652C12.8652 3.57145 10.865 2.1333 7.99998 2.1333C5.13493 2.1333 3.13479 3.57146 1.87023 4.97652C1.23833 5.67864 0.78334 6.37895 0.485985 6.90369C0.337007 7.1666 0.226765 7.38691 0.153002 7.54338C0.1161 7.62165 0.0882684 7.68408 0.06923 7.72801C0.0597091 7.74999 0.0523817 7.76735 0.0472137 7.77977L0.0410748 7.79465L0.0392106 7.79924L0.0385783 7.80081L0.0383369 7.80141C0.0382369 7.80166 0.0381453 7.80189 0.533333 7.99997L0.0381453 7.80189C-0.0127151 7.92904 -0.0127151 8.07089 0.0381453 8.19804L0.533333 7.99997C0.0381453 8.19804 0.0382369 8.19827 0.0383369 8.19852L0.0385783 8.19912L0.0392106 8.20069L0.0410748 8.20528L0.0472137 8.22017C0.0523817 8.23259 0.0597091 8.24995 0.06923 8.27192C0.0882684 8.31585 0.1161 8.37828 0.153002 8.45656C0.226765 8.61302 0.337007 8.83334 0.485985 9.09624C0.78334 9.62099 1.23833 10.3213 1.87023 11.0234C3.13479 12.4285 5.13493 13.8666 7.99998 13.8666C10.865 13.8666 12.8652 12.4285 14.1297 11.0234C14.7617 10.3213 15.2167 9.62099 15.514 9.09624C15.663 8.83334 15.7732 8.61303 15.847 8.45656C15.8839 8.37828 15.9117 8.31586 15.9308 8.27192C15.9403 8.24995 15.9476 8.23259 15.9528 8.22017L15.9589 8.20528L15.9608 8.20069L15.9614 8.19912L15.9617 8.19852C15.9618 8.19827 15.9619 8.19804 15.4667 7.99997ZM15.4667 7.99997L15.9619 8.19804C16.0127 8.07089 16.0127 7.92904 15.9619 7.80189L15.4667 7.99997ZM5.33333 7.99997C5.33333 6.52721 6.52724 5.3333 8 5.3333C9.47276 5.3333 10.6667 6.52721 10.6667 7.99997C10.6667 9.47273 9.47276 10.6666 8 10.6666C6.52724 10.6666 5.33333 9.47273 5.33333 7.99997ZM8 6.39997C7.11634 6.39997 6.4 7.11631 6.4 7.99997C6.4 8.88362 7.11634 9.59997 8 9.59997C8.88366 9.59997 9.6 8.88362 9.6 7.99997C9.6 7.11631 8.88366 6.39997 8 6.39997Z"
      fill="#FF868E"
    />
  </svg>
)

export const ThemeEyeClosed = ({ ...props }) => ( 
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="9" 
    viewBox="0 0 16 9"
    {...props}
  >
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M2.66283 3.11C3.79827 4.3716 5.53146 5.60011 7.99973 5.60011C10.468 5.60011 12.2012 4.3716 13.3367 3.11C13.9047 2.47878 14.3164 1.84576 14.5857 1.37051C14.7201 1.13341 14.8182 0.937055 14.8819 0.801856C14.9138 0.734299 14.937 0.682142 14.9518 0.647952C14.9592 0.630861 14.9645 0.618273 14.9677 0.61051L14.971 0.60253L14.9714 0.601682C14.9713 0.60185 14.9712 0.602038 15.4664 0.800114C15.9616 0.998191 15.9615 0.99842 15.9614 0.998669L15.9612 0.99927L15.9605 1.00084L15.9587 1.00543L15.9525 1.02032C15.9474 1.03274 15.94 1.0501 15.9305 1.07207C15.9115 1.116 15.8836 1.17843 15.8467 1.25671C15.773 1.41317 15.6627 1.63348 15.5138 1.89639C15.2164 2.42114 14.7614 3.12144 14.1295 3.82356C13.9344 4.04031 13.7219 4.25784 13.4913 4.47075L15.3102 6.28966L14.556 7.0439L12.6628 5.15074C11.5878 5.92968 10.2211 6.54206 8.53307 6.64989L8.53308 8.80011L7.46642 8.80012L7.4664 6.64989C5.77837 6.54206 4.4117 5.92969 3.33669 5.15075L1.44354 7.0439L0.689295 6.28966L2.50819 4.47076C2.27763 4.25784 2.06506 4.04031 1.86999 3.82356C1.23808 3.12144 0.783092 2.42113 0.485737 1.89639C0.336759 1.63348 0.226516 1.41317 0.152754 1.2567C0.115852 1.17843 0.0880203 1.116 0.0689819 1.07207C0.059461 1.05009 0.0521336 1.03273 0.0469656 1.02032L0.0408267 1.00543L0.0389625 1.00084L0.0383302 0.999268L0.0380888 0.998666C0.0379889 0.998417 0.0378972 0.998188 0.533085 0.800114C1.02827 0.602041 1.0282 0.601852 1.02813 0.601684L1.02804 0.601448L1.02848 0.602532L1.03177 0.610513C1.035 0.618275 1.0403 0.630863 1.04771 0.647954C1.06252 0.682144 1.08573 0.734301 1.11758 0.801859C1.18132 0.937058 1.27941 1.13341 1.41376 1.37051C1.68307 1.84576 2.09474 2.47878 2.66283 3.11ZM1.02799 0.601335C1.02797 0.601293 1.02799 0.601331 1.02804 0.601448L1.02799 0.601335Z" 
      fill="#FF868E"
    />
  </svg>
)

export const ThemeTogglerRight = ({ ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="44" 
    height="24" 
    viewBox="0 0 44 24"
    {...props}
  >
    <rect 
      width="44" 
      height="24" 
      rx="12" 
      fill="#FBE0DC"
    />
    <rect 
      x="24" 
      y="4" 
      width="16" 
      height="16" 
      rx="8" 
      fill="#FF868E"
    />
  </svg>
)

export const ThemeTogglerLeft = ({ ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="44" 
    height="24" 
    viewBox="0 0 44 24"
    {...props}
  >
    <rect 
      width="44" 
      height="24" 
      rx="12" 
      fill="#FF868E" 
      fill-opacity="0.2"
    />
    <rect 
      x="4" 
      y="4" 
      width="16" 
      height="16" 
      rx="8" 
      fill="#FF868E"
    />
  </svg>
)

export const BurgerMenuSvg = ({ 
  size = 30,
	color = "#FF868E", 
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill={color}
      clipRule="evenodd"
      d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"
    />
  </svg>
);

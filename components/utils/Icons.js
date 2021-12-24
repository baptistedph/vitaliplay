export const ArrowLeft = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 12H5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19L5 12L12 5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowRight = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12H19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const User = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ChevronDown = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L12 15L18 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ChevronRight = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={color}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Add = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 5V19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Instagram = ({ color = '#000000', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M24.715 10.5033C23.485 10.4467 23.115 10.4367 20 10.4367C16.885 10.4367 16.5167 10.4483 15.2867 10.5033C12.1217 10.6483 10.6483 12.1467 10.5033 15.2867C10.4483 16.5167 10.435 16.885 10.435 20C10.435 23.115 10.4483 23.4833 10.5033 24.715C10.6483 27.8467 12.115 29.3533 15.2867 29.4983C16.515 29.5533 16.885 29.5667 20 29.5667C23.1167 29.5667 23.485 29.555 24.715 29.4983C27.88 29.355 29.3517 27.8517 29.4983 24.715C29.5533 23.485 29.565 23.115 29.565 20C29.565 16.885 29.5533 16.5167 29.4983 15.2867C29.3517 12.1483 27.8767 10.6483 24.715 10.5033ZM20 25.9917C16.6917 25.9917 14.0083 23.31 14.0083 20C14.0083 16.6917 16.6917 14.01 20 14.01C23.3083 14.01 25.9917 16.6917 25.9917 20C25.9917 23.3083 23.3083 25.9917 20 25.9917ZM26.2283 15.1733C25.455 15.1733 24.8283 14.5467 24.8283 13.7733C24.8283 13 25.455 12.3733 26.2283 12.3733C27.0017 12.3733 27.6283 13 27.6283 13.7733C27.6283 14.545 27.0017 15.1733 26.2283 15.1733ZM23.8883 20C23.8883 22.1483 22.1467 23.8883 20 23.8883C17.8533 23.8883 16.1117 22.1483 16.1117 20C16.1117 17.8517 17.8533 16.1117 20 16.1117C22.1467 16.1117 23.8883 17.8517 23.8883 20ZM20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM31.5967 24.81C31.405 29.0517 29.0433 31.4017 24.8117 31.5967C23.5667 31.6533 23.1683 31.6667 20 31.6667C16.8317 31.6667 16.435 31.6533 15.19 31.5967C10.95 31.4017 8.59833 29.0483 8.40333 24.81C8.34667 23.5667 8.33333 23.1683 8.33333 20C8.33333 16.8317 8.34667 16.435 8.40333 15.19C8.59833 10.95 10.9517 8.59833 15.19 8.405C16.435 8.34667 16.8317 8.33333 20 8.33333C23.1683 8.33333 23.5667 8.34667 24.8117 8.405C29.0533 8.6 31.4067 10.9583 31.5967 15.19C31.6533 16.435 31.6667 16.8317 31.6667 20C31.6667 23.1683 31.6533 23.5667 31.5967 24.81Z"
      />
    </svg>
  )
}

export const Twitter = ({ color = '#000000', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM30.11 16.075C30.415 22.8083 25.3933 30.315 16.5033 30.315C13.8 30.315 11.285 29.5217 9.16667 28.1633C11.7067 28.4633 14.2417 27.7567 16.2533 26.1817C14.16 26.1433 12.3917 24.7583 11.78 22.8567C12.5317 23 13.2717 22.9583 13.9433 22.775C11.6417 22.3117 10.0517 20.2383 10.1033 18.02C10.75 18.3783 11.4867 18.5933 12.2717 18.6183C10.14 17.1933 9.53667 14.3783 10.79 12.2267C13.15 15.1233 16.6783 17.0283 20.6567 17.2283C19.9583 14.235 22.23 11.35 25.3217 11.35C26.6967 11.35 27.9417 11.9317 28.815 12.8617C29.905 12.6483 30.9317 12.2483 31.855 11.7C31.4967 12.8183 30.7383 13.755 29.75 14.3483C30.7183 14.2317 31.6417 13.975 32.4983 13.5933C31.8583 14.5567 31.0483 15.4 30.11 16.075Z"
      />
    </svg>
  )
}

export const Facebook = ({ color = '#000000', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM25 13.3333H22.75C21.8533 13.3333 21.6667 13.7017 21.6667 14.63V16.6667H25L24.6517 20H21.6667V31.6667H16.6667V20H13.3333V16.6667H16.6667V12.82C16.6667 9.87167 18.2183 8.33333 21.715 8.33333H25V13.3333Z"
      />
    </svg>
  )
}

export const Linkedin = ({ color = '#000000', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM16.6667 26.6667H13.3333V16.6667H16.6667V26.6667ZM15 15.1817C13.9883 15.1817 13.1667 14.355 13.1667 13.3333C13.1667 12.3133 13.9867 11.485 15 11.485C16.0133 11.485 16.8333 12.3133 16.8333 13.3333C16.8333 14.355 16.0117 15.1817 15 15.1817ZM28.3333 26.6667H25.0033V21.8983C25.0033 18.7633 21.6667 19.0283 21.6667 21.8983V26.6667H18.3333V16.6667H21.6667V18.4883C23.12 15.795 28.3333 15.595 28.3333 21.0683V26.6667Z"
      />
    </svg>
  )
}

export const Gift = ({ color = '#000000', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_129_1840)">
        <path
          d="M37.0883 26.5442L33.9063 42.9043L7.73016 37.8132L10.9121 21.4531"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.9512 19.0006L9.23096 12.6367L7.63998 20.8168L40.3602 27.1807L41.9512 19.0006Z"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.8181 40.3585L25.5911 15.8184"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.229 14.3876L25.5911 15.8195C25.5911 15.8195 25.546 7.32128 19.82 6.2076C18.7353 5.99662 17.6111 6.2252 16.6949 6.84304C15.7787 7.46089 15.1455 8.41739 14.9345 9.50213C14.7235 10.5869 14.9521 11.711 15.5699 12.6272C16.1878 13.5434 17.1443 14.1767 18.229 14.3876Z"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.9532 17.2506L25.5912 15.8187C25.5912 15.8187 28.8181 7.95687 34.5442 9.07055C35.6289 9.28152 36.5854 9.91477 37.2033 10.831C37.8211 11.7472 38.0497 12.8713 37.8387 13.9561C37.6277 15.0408 36.9945 15.9973 36.0783 16.6152C35.1621 17.233 34.0379 17.4616 32.9532 17.2506Z"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_129_1840">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(8.18628 0.548828) rotate(11.0063)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Android = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_201_3188)">
        <path
          d="M2.05404 7.12671C1.67498 7.12671 1.35336 7.2589 1.08898 7.52327C0.82461 7.78765 0.692383 8.10489 0.692383 8.47516V14.1602C0.692383 14.5398 0.82457 14.8611 1.08898 15.1255C1.35336 15.3899 1.67498 15.5221 2.05404 15.5221C2.43282 15.5221 2.75249 15.3899 3.01276 15.1255C3.27252 14.8611 3.40276 14.5398 3.40276 14.1602V8.47516C3.40276 8.10485 3.27057 7.78765 3.00616 7.52327C2.74175 7.2589 2.4243 7.12671 2.05404 7.12671Z"
          fill={color}
        />
        <path
          d="M13.0012 2.02291L13.9399 0.291223C14.0015 0.176578 13.9796 0.0886653 13.874 0.0268478C13.7593 -0.0264568 13.6712 0.000553543 13.6096 0.105969L12.6577 1.8515C11.8202 1.48119 10.9343 1.2957 10.0002 1.2957C9.06584 1.2957 8.17991 1.48123 7.34267 1.8515L6.39079 0.105969C6.32893 0.000553543 6.24082 -0.0262181 6.12641 0.0268478C6.02052 0.0889437 5.9986 0.176578 6.06046 0.291223L6.99921 2.02291C6.04733 2.50834 5.28921 3.18439 4.72514 4.05254C4.16106 4.92116 3.87891 5.87038 3.87891 6.90187H16.1082C16.1082 5.87062 15.826 4.92136 15.2619 4.05254C14.6978 3.18439 13.9441 2.50834 13.0012 2.02291ZM7.57395 4.54167C7.47243 4.64342 7.35118 4.69406 7.21025 4.69406C7.06903 4.69406 6.95025 4.64342 6.85334 4.54167C6.75644 4.44039 6.70799 4.31962 6.70799 4.1782C6.70799 4.03726 6.75644 3.91625 6.85334 3.81474C6.95025 3.71346 7.06931 3.66282 7.21025 3.66282C7.35118 3.66282 7.47243 3.71346 7.57395 3.81474C7.67523 3.91649 7.72611 4.03726 7.72611 4.1782C7.72583 4.31938 7.67499 4.44039 7.57395 4.54167ZM13.1465 4.54167C13.0494 4.64342 12.9303 4.69406 12.7896 4.69406C12.6484 4.69406 12.5272 4.64342 12.4259 4.54167C12.3244 4.44039 12.2737 4.31962 12.2737 4.1782C12.2737 4.03726 12.3244 3.91625 12.4259 3.81474C12.5272 3.71346 12.6484 3.66282 12.7896 3.66282C12.9306 3.66282 13.0494 3.71346 13.1465 3.81474C13.2435 3.91649 13.2919 4.03726 13.2919 4.1782C13.2919 4.31938 13.2435 4.44039 13.1465 4.54167Z"
          fill={color}
        />
        <path
          d="M3.93164 16.183C3.93164 16.5889 4.07258 16.9324 4.3545 17.2143C4.63665 17.4963 4.98019 17.6372 5.38574 17.6372H6.36416L6.37757 20.6387C6.37757 21.0177 6.50975 21.3396 6.77413 21.604C7.0385 21.8684 7.35598 22.0006 7.72601 22.0006C8.10483 22.0006 8.42665 21.8684 8.69107 21.604C8.95548 21.3396 9.08767 21.0178 9.08767 20.6387V17.6375H10.9121V20.6387C10.9121 21.0177 11.0443 21.3396 11.3087 21.604C11.5731 21.8684 11.8946 22.0006 12.2737 22.0006C12.6526 22.0006 12.9744 21.8684 13.2388 21.604C13.5032 21.3396 13.6353 21.0178 13.6353 20.6387V17.6375H14.627C15.0235 17.6375 15.3627 17.4965 15.6451 17.2146C15.927 16.9327 16.068 16.5891 16.068 16.1833V7.37769H3.93164V16.183Z"
          fill={color}
        />
        <path
          d="M17.9461 7.12671C17.5758 7.12671 17.2586 7.25695 16.9942 7.51671C16.7298 7.77695 16.5977 8.09662 16.5977 8.47516V14.1602C16.5977 14.5398 16.7298 14.8611 16.9942 15.1255C17.2586 15.3899 17.5761 15.5221 17.9461 15.5221C18.325 15.5221 18.6468 15.3899 18.9112 15.1255C19.1756 14.8611 19.3078 14.5398 19.3078 14.1602V8.47516C19.3078 8.09658 19.1756 7.77695 18.9112 7.51671C18.6468 7.25695 18.325 7.12671 17.9461 7.12671Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_201_3188">
          <rect width="22" height="22" fill="white" transform="translate(-1)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Apple = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_201_3174)">
        <path
          d="M16.6746 21.119C15.3872 22.2762 13.9667 22.0958 12.6128 21.5502C11.1734 20.9936 9.85748 20.9584 8.33729 21.5502C6.44418 22.307 5.43943 22.087 4.29929 21.119C-2.13775 14.981 -1.18764 5.63099 6.12827 5.27899C7.90261 5.36699 9.14489 6.18759 10.19 6.25579C11.7435 5.96319 13.2304 5.12499 14.8931 5.23499C16.8907 5.38459 18.3848 6.11499 19.3824 7.42839C15.2731 9.71638 16.247 14.7324 20.0214 16.1404C19.266 17.9774 18.2969 19.7924 16.6722 21.1344L16.6746 21.119ZM10.0475 5.21299C9.8551 2.48499 12.2423 0.240996 14.9881 0.0209961C15.3658 3.16699 11.9002 5.52099 10.0475 5.21299Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_201_3174">
          <rect width="20" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Stamp = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 92 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M46 0L54.6075 5.50469L64.7099 3.97691L70.3343 12.5067L80.1847 15.22L81.8535 25.3L89.7486 31.7852L87.1732 41.6725L91.748 50.8083L85.3737 58.7933L85.8372 69L76.7662 73.702L73.0381 83.2148L62.8389 83.8208L55.5639 90.9948L46 87.4L36.4361 90.9948L29.1611 83.8208L18.9619 83.2148L15.2338 73.702L6.16283 69L6.62626 58.7933L0.251991 50.8083L4.82679 41.6725L2.2514 31.7852L10.1465 25.3L11.8153 15.22L21.6657 12.5067L27.2901 3.97691L37.3925 5.50469L46 0Z"
        fill="#FFA799"
      />
    </svg>
  )
}

export const Check = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3332 4L5.99984 11.3333L2.6665 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const CheckMark = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6L9 17L4 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Filter = ({ color = '#000000', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_167_7676)">
        <path
          d="M3.90527 16.8568V11.5234"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.90527 8.47591V3.14258"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16.8571V10"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 6.9521V3.14258"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0957 16.8569V13.0474"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0957 9.99972V3.14258"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.61914 11.5234H6.19057"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.71484 6.95215H12.2863"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8096 13.0474H18.381"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_167_7676">
          <rect
            width="18.2857"
            height="18.2857"
            fill="white"
            transform="translate(0.857422 0.856934)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

type LucideProps = {
  color: string;
  className: string;
};

export const Icons = {
  home: (props: LucideProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
        stroke={props.color}
        strokeWidth="1.5"
      />
      <path
        d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
        stroke={props.color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
        stroke={props.color}
        strokeWidth="1.5"
      />
      <path
        d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
        stroke={props.color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  email: (props: LucideProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
        stroke={props.color}
        strokeWidth="1.8"
      />
      <path
        d="M15 18H9"
        stroke={props.color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  keyboard: (props: LucideProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
        stroke={props.color}
        strokeWidth="1.5"
      />
      <rect x="8" y="11" width="2" height="2" rx="1" fill={props.color} />
      <rect x="9" y="8" width="2" height="2" rx="1" fill={props.color} />
      <rect x="12" y="8" width="2" height="2" rx="1" fill={props.color} />
      <rect x="15" y="8" width="2" height="2" rx="1" fill={props.color} />
      <rect x="18" y="8" width="2" height="2" rx="1" fill={props.color} />
      <rect x="11" y="11" width="2" height="2" rx="1" fill={props.color} />
      <rect x="14" y="11" width="2" height="2" rx="1" fill={props.color} />
      <rect x="17" y="11" width="3" height="2" rx="1" fill={props.color} />
      <rect x="8" y="14" width="8" height="2" rx="1" fill={props.color} />
      <rect x="4" y="14" width="3" height="2" rx="1" fill={props.color} />
      <rect x="4" y="11" width="3" height="2" rx="1" fill={props.color} />
      <rect x="4" y="8" width="4" height="2" rx="1" fill={props.color} />
      <rect x="17" y="14" width="3" height="2" rx="1" fill={props.color} />
    </svg>
  ),
};

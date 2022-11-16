
import React from 'react'
import { useTheme } from '../../context/theme-context';
type Props = {
    className?: string;
    onClick?: any
}


export const ViewIcon = ({ className, onClick }: Props) => {
    return (
        <svg onClick={onClick} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 12 17.5385 18 12 18C6.46154 18 2 12 2 12C2 12 6.46154 6 12 6C17.5385 6 22 12 22 12Z" stroke="#F2994A" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#F2994A" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const DeleteIcon = ({ className, onClick }: Props) => {
    return (
        <svg onClick={onClick} className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.21429 16C3.21429 17.1 4.08214 18 5.14286 18H12.8571C13.9179 18 14.7857 17.1 14.7857 16V4H3.21429V16ZM5.14286 6H12.8571V16H5.14286V6ZM12.375 1L11.4107 0H6.58929L5.625 1H2.25V3H15.75V1H12.375Z" fill="#F2994A" />
        </svg>
    )
}

export const CreateIcon = ({ className, onClick }: Props) => {
    return (
        <svg onClick={onClick} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5.05556C2 3.36802 3.36801 2 5.05556 2H18.9444C20.632 2 22 3.36802 22 5.05556V12.1281C21.4877 11.7808 20.9282 11.4977 20.3333 11.2901V5.05556C20.3333 4.28849 19.7115 3.66667 18.9444 3.66667H5.05556C4.2885 3.66667 3.66667 4.28849 3.66667 5.05556V18.9444C3.66667 19.7116 4.2885 20.3333 5.05556 20.3333H11.0796C11.2711 20.9261 11.5372 21.4853 11.8666 22H5.05556C3.36801 22 2 20.632 2 18.9444V5.05556Z" fill="#F2994A" />
            <path d="M24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24C21.3137 24 24 21.3137 24 18ZM18.5461 18.5455L18.5467 21.2765C18.5467 21.5779 18.3025 21.822 18.0012 21.822C17.7 21.822 17.4557 21.5779 17.4557 21.2765L17.4552 18.5455H14.723C14.4218 18.5455 14.1776 18.3013 14.1776 18C14.1776 17.6988 14.4218 17.4545 14.723 17.4545H17.4551L17.4545 14.7265C17.4545 14.4252 17.6988 14.1811 18 14.1811C18.3012 14.1811 18.5455 14.4252 18.5455 14.7265L18.546 17.4545H21.276C21.5773 17.4545 21.8215 17.6988 21.8215 18C21.8215 18.3013 21.5773 18.5455 21.276 18.5455H18.5461Z" fill="#F2994A" />
        </svg>

    )
}
export const EditIcon = ({ className, onClick }: Props) => {
    return (
        <svg onClick={onClick} className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_135_95)">
                <path d="M0.991619 18C0.854587 17.9998 0.719103 17.971 0.593783 17.9155C0.468463 17.8601 0.356049 17.7792 0.263689 17.6779C0.169659 17.5775 0.0979076 17.4584 0.0531406 17.3283C0.00837352 17.1982 -0.00839809 17.0601 0.0039252 16.9231L0.24591 14.2615L11.4246 3.08372L14.9181 6.57716L3.74235 17.754L1.0815 17.996C1.05162 17.9988 1.02163 18.0001 0.991619 18ZM15.6154 5.87867L12.1229 2.38523L14.2178 0.289757C14.3096 0.197899 14.4185 0.125028 14.5384 0.0753094C14.6583 0.0255909 14.7868 0 14.9166 0C15.0464 0 15.175 0.0255909 15.2949 0.0753094C15.4148 0.125028 15.5237 0.197899 15.6154 0.289757L17.7103 2.38523C17.8022 2.47698 17.875 2.58594 17.9247 2.70588C17.9744 2.82582 18 2.95438 18 3.08421C18 3.21405 17.9744 3.34261 17.9247 3.46254C17.875 3.58248 17.8022 3.69144 17.7103 3.7832L15.6164 5.87768L15.6154 5.87867Z" fill="#F2994A" />
            </g>
            <defs>
                <clipPath id="clip0_135_95">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export const SearchIcon = ({ className, onClick }: Props) => {
    const { theme } = useTheme();
    return (
        <svg onClick={onClick} className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.31716 15.8002C9.97761 15.7998 11.5902 15.244 12.8982 14.2212L17.0106 18.3333L18.3333 17.0106L14.221 12.8985C15.2444 11.5904 15.8006 9.97754 15.801 8.31674C15.801 4.19057 12.4436 0.833313 8.31716 0.833313C4.19076 0.833313 0.833328 4.19057 0.833328 8.31674C0.833328 12.4429 4.19076 15.8002 8.31716 15.8002ZM8.31716 2.70417C11.4127 2.70417 13.93 5.22141 13.93 8.31674C13.93 11.4121 11.4127 13.9293 8.31716 13.9293C5.22166 13.9293 2.70429 11.4121 2.70429 8.31674C2.70429 5.22141 5.22166 2.70417 8.31716 2.70417Z" fill={theme == 'light' ? '#bebebe' : '#555555'} />
        </svg>


    )
}

export const SortIcon = ({ className, onClick }: Props) => {
    return (
        <svg onClick={onClick} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.35 7.9375H21.7V10.3125H11.35V7.9375ZM11.35 12.6875H19.4V15.0625H11.35V12.6875ZM11.35 3.1875H24V5.5625H11.35V3.1875ZM11.35 17.4375H17.1V19.8125H11.35V17.4375ZM4.45 21H6.75V6.75H10.2L5.6 2L1 6.75H4.45V21Z" fill="#F2994A" />
        </svg>


    )
}








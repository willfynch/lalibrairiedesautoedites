'use client'


export default function UpWaves() {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35.28 2.17"
            preserveAspectRatio="none"
            style={{
                width: '100%',
                height: '85px',
                position: 'relative',
                bottom: -1,
                left: 0,
                right: 0,
            }}
        >
            <path
                d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z"
                style={{ transitionDuration:"500ms", fill: '#fdf7ec' }}
            />
            <path
                d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z"
                style={{ transitionDuration:"500ms",opacity: '0.5', fill: '#fdf7ec' }}
            />
            <path
                d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z"
                style={{ transitionDuration:"500ms",opacity: '0.5', fill: '#fdf7ec' }}
            />
        </svg>
    )
}
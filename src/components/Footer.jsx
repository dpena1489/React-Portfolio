export default function Footer(){
    return(
        <div className="container-fluid">
        <div className="navbar footer">
                <div className="d-flex justify-content-center">
                    <div className="p-2">
                    <a href="https://leetcode.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                    </a>
                    </div>
                    <div className="p-2">
                    <a href="https://github.com/dpena1489" target="new">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m0 65.332c295.289 0 534.668 239.379 534.668 534.668S895.289 1134.668 600 1134.668S65.332 895.289 65.332 600S304.711 65.332 600 65.332M334.644 221.924c-15.228 44.26-20.507 92.298-6.885 134.253c-16.457 18.264-29.235 39.243-38.379 62.988c-24.371 77.026-18.418 175.425 34.937 234.961c18.743 20.548 44.172 37.441 76.172 50.684c31.999 13.241 73.127 21.688 123.413 25.343c-33.751 15.771-57.543 25.406-65.846 60.277c-37.646 25.156-83.427 19.153-116.602-8.203c-26.217-19.143-38.094-53.164-67.163-65.771c-1.828-1.826-7.539-3.188-17.139-4.103c-9.6-.913-17.146 1.811-22.632 8.203c-2.743 2.739-2.541 5.666.659 8.862c22.006 17.897 43.187 36.867 55.591 59.619c11.886 24.657 24.188 42.711 36.987 54.126c35.507 23.993 83.126 36.476 124.806 21.24c-4.86 29.329 8.252 75.13-1.393 101.367c-3.658 7.306-8.89 13.71-15.747 19.188c-6.111 5.962-25.06 13.42-21.24 22.56c1.828 4.108 8.219 6.631 19.189 7.544c24.151-.616 48.193-10.382 62.402-29.443c5.028-6.85 7.544-15.774 7.544-26.733V846.607c0-12.785 2.717-21.913 8.203-27.394c5.484-5.479 11.471-9.16 17.87-10.985v147.948c0 12.785-1.155 23.753-3.441 32.886c-2.286 9.134-4.324 15.536-6.152 19.189c-4.197 7.039-12.221 13.535-12.378 21.899c0 2.738 1.635 4.305 4.834 4.761c24.021-1.042 51.889-15.133 61.67-34.938c7.771-16.438 11.646-33.736 11.646-52.002V802.734h30.176v145.238c0 18.266 4.149 35.563 12.378 52.002s21.962 27.002 41.162 31.567c10.057 2.74 16.85 3.826 20.508 3.369c3.657-.457 5.291-2.021 4.834-4.761c-2.202-8.299-6.791-15.397-11.646-21.899c-6.4-8.219-9.596-25.591-9.596-52.075V808.229c6.4 1.825 12.588 5.507 18.53 10.985c5.942 5.479 8.862 14.607 8.862 27.394v112.279c0 10.959 2.515 19.885 7.544 26.733c15.283 19.437 38.314 29.297 62.401 29.443c10.973-.913 17.361-3.436 19.189-7.544c1.828-4.109.47-7.516-4.102-10.255s-10.281-6.824-17.14-12.305c-6.857-5.479-12.09-11.884-15.747-19.188c-4.104-47.109-.104-97.608-3.441-145.239c-6.589-51.979-26.597-69.079-66.504-88.989c47.543-3.653 86.633-12.376 117.261-26.074c91.558-44.484 116.875-113.258 117.261-205.443c-1.444-59.33-18.57-111.086-57.642-150.732c5.484-21.004 7.12-42.867 4.834-65.698c-2.286-22.831-7.115-43.405-14.43-61.67c-33.824 1.826-62.174 8.635-85.033 20.508c-22.857 11.873-39.31 21.957-49.365 30.176c-81.016-18.393-167.743-18.503-245.436 2.71c-39.748-32.517-89.018-50.632-135.784-53.396"/></svg>
                    </a>
                    </div>
                    <div className="p-2">
                    <a href="https://www.linkedin.com/in/daisy-pena-b1267a153/" target="new">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/></svg>
                    </a>
                    </div>
                </div>
            
        </div>
        </div>
    )
}
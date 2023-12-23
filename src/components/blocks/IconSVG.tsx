export function IconSVG({ icon, color, width, height }: {
    icon: String,
    color: String,
    width: String,
    height: String
}) {
    switch (icon) {
        case "LOGO":
            return (
                <svg className={`${color} ${width} ${height}`} viewBox="0 0 677 685">
                    <path d="M0 0 C1.15411377 0.31348389 1.15411377 0.31348389 2.33154297 0.63330078 C17.29862519 4.89456219 30.34881045 12.73840186 42 23 C42.91458984 23.7734375 42.91458984 23.7734375 43.84765625 24.5625 C52.19317377 32.16661619 58.64484001 43.27365518 62 54 C62.29648437 54.90878906 62.59296875 55.81757812 62.8984375 56.75390625 C69.22866843 78.56126142 62.59241453 102.98685743 52.25 122.5625 C51.18373893 124.38509559 50.09768063 126.19615284 49 128 C48.16458373 129.42532386 47.33002526 130.85115068 46.49609375 132.27734375 C41.90526343 140.04487919 37.22972904 147.41653784 31.328125 154.2734375 C28.04252454 158.12133871 24.97281197 162.1303867 21.89257812 166.14355469 C19.13863794 169.68930382 16.21624685 172.85455104 13 176 C11.32479957 177.82553893 9.65859648 179.65936244 8 181.5 C-0.49680559 190.83929417 -9.33196056 199.86737345 -19 208 C-20.78410193 209.51763474 -22.56566324 211.03819096 -24.34594727 212.56030273 C-25.58810358 213.62184547 -26.83200377 214.681352 -28.07788086 215.73852539 C-28.94425171 216.47703735 -28.94425171 216.47703735 -29.828125 217.23046875 C-30.3427832 217.66770264 -30.85744141 218.10493652 -31.38769531 218.55541992 C-33.333628 220.29892139 -35.16569889 222.14009821 -37 224 C-36.37061523 224.11891602 -35.74123047 224.23783203 -35.09277344 224.36035156 C-20.10321767 227.26829325 -5.70867777 231.13664716 8.75 236 C9.49914673 236.25076294 10.24829346 236.50152588 11.0201416 236.7598877 C24.93499704 241.43936136 38.48490684 246.57193193 51.5546875 253.296875 C54.88597152 254.94363218 58.24276407 256.35931774 61.6875 257.75 C81.75198869 266.23364287 99.89121885 279.16233396 116.19824219 293.46899414 C117.56881915 294.63361313 118.96496436 295.7682173 120.37207031 296.88842773 C127.45990895 302.5377917 133.9422196 308.60119652 140.33398438 315.01831055 C141.98968034 316.67716068 143.65827497 318.32221044 145.328125 319.96679688 C173.49416151 347.9668697 193.42662419 383.71207865 194.25 424.1875 C194.20103501 426.7989661 194.1254967 429.39259292 194 432 C193.94634277 433.13115234 193.94634277 433.13115234 193.89160156 434.28515625 C191.51721804 476.92007204 166.77667435 512.10886863 136.3125 540.4375 C95.01459332 576.81327245 33.71229663 598.02502863 -21 595 C-44.4084435 593.16813965 -44.4084435 593.16813965 -52 587 C-55.09457456 582.99525646 -55.53012007 579.11982493 -55.35546875 574.1796875 C-54.67560083 570.01082706 -52.36261122 567.34557858 -49.4375 564.45703125 C-45.13134912 561.88300196 -40.15194514 561.48293467 -35.26171875 560.62695312 C-30.33582897 559.69407859 -26.423429 558.34105405 -22.02001953 555.96606445 C-19.13972348 554.58857696 -16.19501234 553.91987281 -13.10058594 553.17675781 C1.09674289 549.74077481 13.34616243 543.13212364 26 536 C27.24668457 535.30221436 27.24668457 535.30221436 28.51855469 534.59033203 C45.35975788 525.10517903 61.83364724 514.80443006 75.1875 500.6875 C77 499 77 499 79 499 C79.33 498.01 79.66 497.02 80 496 C81.72265625 494.51953125 81.72265625 494.51953125 84.0625 492.8125 C96.90456776 482.75257318 107.83927388 471.14847782 116 457 C116.59296875 455.98421875 117.1859375 454.9684375 117.796875 453.921875 C127.9554589 435.11340777 130.09338793 414.15620916 124.28125 393.79296875 C119.09383384 377.71772422 108.44560318 364.46652201 97.51953125 351.8984375 C96.03703037 350.19298687 94.56913517 348.47429071 93.13671875 346.7265625 C89.16578595 341.9311162 84.68345434 338.14409747 79.80859375 334.28125 C77.1720088 332.1397123 74.71755571 329.89456596 72.25 327.5625 C63.23651957 319.35276942 50.60204918 309.86734973 39 306 C39 305.34 39 304.68 39 304 C38.14535156 303.73832031 37.29070312 303.47664063 36.41015625 303.20703125 C32.89038139 301.96120028 29.74510912 300.41604196 26.4375 298.6875 C20.90562665 295.85873434 15.3376736 293.45171649 9.5 291.3046875 C6.99481852 290.37083637 4.53039692 289.40553381 2.0625 288.3828125 C-33.23754956 273.8705699 -81.29125209 260.89682683 -119.29370117 271.48974609 C-126.30338759 273.35551886 -133.33655912 273.64783002 -140.5625 273.9375 C-141.75335205 273.99478271 -142.9442041 274.05206543 -144.17114258 274.11108398 C-151.97339758 274.34521223 -158.72436799 273.9277209 -165.3046875 269.421875 C-170.88617181 263.47939917 -173.73678246 257.8501787 -173.484375 249.55859375 C-172.60732591 244.92579412 -170.01760157 241.5281719 -167 238 C-166.34773438 237.16082031 -165.69546875 236.32164062 -165.0234375 235.45703125 C-160.56763843 231.8359749 -155.82052357 230.87124182 -150.3125 229.5 C-149.1670874 229.19723145 -148.0216748 228.89446289 -146.84155273 228.58251953 C-140.97951107 227.07688693 -135.15684219 225.80467312 -129.171875 224.8984375 C-113.41695158 222.50022017 -103.34139625 218.02136551 -91 208 C-89.69550668 207.00242754 -88.38706814 206.0099871 -87.07421875 205.0234375 C-80.97248339 200.39991204 -75.17526122 195.4848182 -69.5534668 190.28588867 C-67.15370689 188.13759992 -64.68645801 186.15435313 -62.15234375 184.16796875 C-55.23954359 178.53775943 -49.00654803 172.27207304 -42.73730469 165.94311523 C-40.74470242 163.93215361 -38.74411067 161.92941305 -36.7421875 159.92773438 C-30.61735275 153.78580605 -24.60861548 147.62252761 -19 141 C-17.38032183 139.22429779 -15.75588282 137.45291693 -14.125 135.6875 C0.05939471 120.10403753 18.47338599 98.67994513 19.4375 76.3125 C18.92497804 67.43946353 15.5938029 60.91751542 9 55 C-6.46650295 42.89363187 -25.52120275 41.59244201 -44.4375 41.6875 C-45.65444046 41.69172974 -45.65444046 41.69172974 -46.89596558 41.69604492 C-84.54716341 41.89120278 -120.27691309 49.48495382 -156 61 C-157.00933594 61.32419922 -158.01867187 61.64839844 -159.05859375 61.98242188 C-164.60547101 63.79487285 -170.0524886 65.74783249 -175.45263672 67.95898438 C-178.19809648 69.0809549 -180.95887327 70.15837393 -183.72265625 71.234375 C-202.2928413 78.55905221 -220.16717962 87.05125494 -238 96 C-238.6253363 96.3132019 -239.25067261 96.62640381 -239.8949585 96.94909668 C-263.60116593 108.83474986 -286.11588425 122.02838893 -308 137 C-308.65887207 137.44891602 -309.31774414 137.89783203 -309.99658203 138.36035156 C-312.72697421 140.22261529 -315.44438929 142.09948033 -318.1484375 144 C-320.0537974 145.33636201 -321.97604635 146.64895307 -323.9140625 147.9375 C-329.9597099 152.06785966 -334.32804888 156.4695757 -338.8046875 162.25390625 C-342.20568803 166.50818271 -346.09096744 170.21936632 -350 174 C-353.53433091 177.43896007 -356.74727728 181.00027567 -359.875 184.8125 C-362.76948628 188.33161427 -365.6945917 191.80618148 -368.75 195.1875 C-379.62689781 207.5672947 -388.42695883 223.17115534 -388 239.9375 C-387.9175 241.14277344 -387.835 242.34804688 -387.75 243.58984375 C-388.13856538 248.89011836 -390.71210104 251.83774972 -394.5625 255.3125 C-399.36163457 258.63497778 -404.35134576 258.80935941 -410 258 C-418.56161502 254.71436176 -423.0338016 244.68939122 -427 237 C-428.11806107 233.26344171 -428.16747519 229.77583252 -428.1875 225.875 C-428.20167969 224.63492188 -428.21585937 223.39484375 -428.23046875 222.1171875 C-427.93783129 213.27736861 -425.30557218 205.52081195 -421.75 197.5 C-421.34305908 196.57292236 -420.93611816 195.64584473 -420.5168457 194.69067383 C-414.94531064 182.18370959 -407.40300757 171.74288041 -399 161 C-398.5659082 160.44441406 -398.13181641 159.88882813 -397.68457031 159.31640625 C-386.1961197 144.79514953 -372.71659458 131.23337693 -358 120 C-356.95117334 119.1639007 -355.90441752 118.32519932 -354.859375 117.484375 C-339.50684519 105.17830019 -323.3305556 93.96012937 -307 83 C-306.08105957 82.3819751 -306.08105957 82.3819751 -305.14355469 81.75146484 C-301.14764542 79.07955628 -297.09972321 76.50821576 -293 74 C-292.34128906 73.59587891 -291.68257812 73.19175781 -291.00390625 72.77539062 C-265.80048818 57.49148297 -238.68940267 44.14356458 -211.41503906 32.98974609 C-209.04666193 32.01912328 -206.69114747 31.02161111 -204.3359375 30.01953125 C-170.48612553 15.82661217 -135.07187308 6.40338151 -99 0 C-97.52635986 -0.26321045 -97.52635986 -0.26321045 -96.02294922 -0.53173828 C-93.5173948 -0.97266114 -91.01010396 -1.39834212 -88.5 -1.8125 C-87.50818726 -1.98023926 -87.50818726 -1.98023926 -86.49633789 -2.15136719 C-59.37886487 -6.36941617 -26.52979526 -7.28717803 0 0 Z " transform="translate(451,37)" />
                    <path d="M0 0 C6.72503384 4.23921275 10.40787188 9.16234556 12.4921875 16.8671875 C12.74993205 19.89325951 12.72862902 22.89470534 12.6796875 25.9296875 C12.67251709 26.76371094 12.66534668 27.59773438 12.65795898 28.45703125 C12.4295214 46.0551858 12.4295214 46.0551858 10.4921875 51.8671875 C10.38182491 54.68438243 10.32764649 57.47807449 10.31860352 60.29589844 C10.31186552 61.16200398 10.30512753 62.02810953 10.29818535 62.9204607 C10.28402013 64.81389288 10.27208651 66.70734273 10.26208305 68.60080147 C10.24586163 71.64512482 10.2237273 74.68935399 10.19996643 77.73362732 C10.16624332 82.09172482 10.13454901 86.44982985 10.10430908 90.80795288 C9.29781775 204.29387881 9.29781775 204.29387881 4.4921875 253.8671875 C4.4169989 254.64457275 4.3418103 255.42195801 4.26434326 256.22290039 C2.58004771 273.4733965 0.62114562 290.64619662 -2.37670898 307.72436523 C-2.53985596 308.66223877 -2.70300293 309.6001123 -2.87109375 310.56640625 C-3.09212769 311.78589966 -3.09212769 311.78589966 -3.31762695 313.0300293 C-3.4117688 313.93942261 -3.4117688 313.93942261 -3.5078125 314.8671875 C-3.1778125 315.1971875 -2.8478125 315.5271875 -2.5078125 315.8671875 C-1.38246094 315.33609375 -0.25710937 314.805 0.90234375 314.2578125 C36.310884 297.8524759 72.80391426 301.18170333 109.32421875 312.8984375 C137.40139806 321.48430738 166.4638798 325.25888407 193.75390625 312.57421875 C197.8096549 310.68923966 201.95661748 309.16808237 206.18359375 307.7109375 C208.73833454 306.82651373 208.73833454 306.82651373 211.9921875 305.1171875 C218.20965484 302.89666345 224.72498332 302.7547188 230.8671875 305.3671875 C236.0590038 308.34155454 238.64942021 313.33888564 240.4921875 318.8671875 C241.07184669 324.77971125 239.81023009 329.02555393 236.4921875 333.8671875 C234.05210936 336.72508724 231.52209324 339.46754937 228.9375 342.1953125 C226.8908762 344.43155959 225.1875268 346.61777298 223.4921875 349.1171875 C214.90066604 360.83506816 197.93290413 367.68326671 183.9375 370.21484375 C167.34969268 372.57773408 148.94947246 372.09464016 132.4921875 368.8671875 C131.44256836 368.66287109 130.39294922 368.45855469 129.31152344 368.24804688 C116.77174666 365.76268571 104.57434154 363.07595878 92.4921875 358.8671875 C87.85365667 357.4155082 83.19130417 356.10836723 78.4921875 354.8671875 C76.83703125 354.41279297 76.83703125 354.41279297 75.1484375 353.94921875 C53.78880111 348.82579245 32.44082029 350.42827418 13.43139648 361.64916992 C7.68245193 365.2246223 2.54330169 369.37730822 -2.5078125 373.8671875 C-3.29430176 374.56328125 -3.29430176 374.56328125 -4.09667969 375.2734375 C-5.74106787 376.73425252 -7.37674554 378.20401908 -9.0078125 379.6796875 C-9.5126416 380.13577393 -10.0174707 380.59186035 -10.53759766 381.06176758 C-14.61008885 384.81158259 -17.49475774 387.9656449 -18.97265625 393.3515625 C-19.21564453 394.20492188 -19.45863281 395.05828125 -19.70898438 395.9375 C-19.95197266 396.82179688 -20.19496094 397.70609375 -20.4453125 398.6171875 C-23.62820316 410.18197619 -27.15103999 419.42536259 -37.8203125 425.8671875 C-46.01071888 428.08831465 -54.17143474 425.89816429 -61.5078125 421.8671875 C-64.0078125 419.3671875 -64.0078125 419.3671875 -65.5078125 416.8671875 C-65.86359375 416.33480469 -66.219375 415.80242187 -66.5859375 415.25390625 C-67.99574046 411.60395028 -67.80372921 408.05767058 -67.7578125 404.1796875 C-67.75104492 403.37039795 -67.74427734 402.5611084 -67.73730469 401.72729492 C-67.61569205 394.71123567 -67.28468883 388.70726082 -63.4934082 382.64746094 C-61.23214027 378.76277954 -60.7545561 375.00221525 -60.48828125 370.5703125 C-60.35547253 368.89794892 -60.22265983 367.22558565 -60.08984375 365.55322266 C-60.02619629 364.67015442 -59.96254883 363.78708618 -59.89697266 362.8772583 C-59.54577593 358.07051886 -59.12995128 353.26964405 -58.70703125 348.46875 C-58.61763275 347.45376434 -58.52823425 346.43877869 -58.43612671 345.39303589 C-57.33737752 333.37638191 -55.68987222 321.43882143 -54.0078125 309.4921875 C-53.77742783 307.8459137 -53.77742783 307.8459137 -53.54238892 306.16638184 C-52.17843505 296.4337939 -50.78407989 286.70594824 -49.34375 276.984375 C-42.74603035 232.03152193 -40.20187256 186.70238864 -37.55510139 141.3870945 C-36.87793291 129.80422882 -36.14660778 118.22689865 -35.33984375 106.65234375 C-35.24681787 105.3105964 -35.15384551 103.96884534 -35.06092834 102.62709045 C-34.3343007 92.14659202 -34.3343007 92.14659202 -33.99624634 87.32070923 C-33.12640901 74.77469403 -32.40148917 62.2648647 -32.25 49.6875 C-32.23626343 48.65407974 -32.22252686 47.62065948 -32.20837402 46.55592346 C-32.15291191 41.79568743 -32.13534175 37.04031045 -32.18652344 32.2800293 C-32.20729496 23.1313586 -31.66829898 16.1352957 -25.5078125 8.8671875 C-24.79496094 7.990625 -24.08210938 7.1140625 -23.34765625 6.2109375 C-22.71988281 5.6025 -22.09210938 4.9940625 -21.4453125 4.3671875 C-20.81496094 3.738125 -20.18460938 3.1090625 -19.53515625 2.4609375 C-13.93692805 -1.93998178 -6.51008216 -2.94069132 0 0 Z " transform="translate(146.5078125,220.1328125)" />
                </svg>
            )

        case "LIGHT_MENU":
            return (
                <svg className={`${color} ${width} ${height}`} viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M4 6H20M4 12H20M4 18H20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case "DARK_MENU":
            return (
                <svg className={`${color} ${width} ${height}`} viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case "PLUS":
            return (
                <svg className={`${color} ${width} ${height}`} viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M6 12H18M12 6V18" stroke="#286018" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case "MINUS":
            return (
                <svg className={`${color} ${width} ${height}`} viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M6 12L18 12" stroke="#A87229" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case "CROSS":
            return (
                <svg className={`${color} ${width} ${height}`} viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M6 6L18 18M18 6L6 18" stroke="#6B130B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        default: // plain circle
            return (
                <svg className={`${color} ${width} ${height}`} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            )
    }
}
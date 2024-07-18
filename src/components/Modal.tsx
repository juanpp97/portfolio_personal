// import { useEffect } from 'preact/hooks';
// import Glide from "@glidejs/glide";
// import '@/components/styles/modal.css'


// interface Props {
//   images: Array<string>;
//   onClose: () => void;
// }

// export default function Modal({ images, onClose }: Props) {
//   const handleEscape = (event: KeyboardEvent) => {
//     if(event.key !== "Escape") return
//     onClose()
//   }
//   useEffect(() => {
//     let glide:any;
//     let content = document.getElementById("content");
//     setTimeout(() => {
//       glide = new Glide(".glide");
//       glide.mount();
//       if(content) content.style.opacity = "1";
//     }, 10);
//     document.addEventListener("keydown", handleEscape)
//     return () => {
//       glide.destroy()
//       if(content) content.style.opacity = "0";
//       document.removeEventListener("keydown", handleEscape)
//     };
//   })

//   return (
//     <div className={"overlay"}>
//       <div className="modal__content" id="content">
//       <div class="glide">
//           <span id="modal-close" onClick={onClose}>&times;</span>

//           <div class="glide__track" data-glide-el="track">
//             <ul class="glide__slides">
//               {images.map((image, index) => (
//                   <li class="glide__slide">
//                     <img src={image} alt={`Slide ${index + 1}`} />
//                   </li>
//               ))}
//               {/* <li class="glide__slide">
//                 <img src="./DSH/DSH1.webp" />
//               </li>
//               <li class="glide__slide">
//                 <img src="./DSH/DSH2.webp" />
//               </li>
//               <li class="glide__slide">
//                 <img src="./DSH/DSH3.webp" />
//               </li>
//               <li class="glide__slide">
//                 <img src="./DSH/DSH4.webp" />
//               </li>
//               <li class="glide__slide">
//                 <img src="./DSH/DSH5.webp" />
//               </li>
//               <li class="glide__slide">
//                 <img src="./DSH/DSH6.webp" />
//               </li> */}
//             </ul>
//           </div>
//           <div class="glide__arrows" data-glide-el="controls">
//             <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
                
   
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left arrow"
//               ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
//                 d="M15 6l-6 6l6 6"></path></svg>
//             </button>
//             <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"

//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right arrow"
//               ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
//                 d="M9 6l6 6l-6 6"></path></svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//   )
// }

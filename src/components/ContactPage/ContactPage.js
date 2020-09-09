import React from "react";

import "./ContactPage.css";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const ContactPage = () => {
  const year = new Date().getFullYear();

  return (
    <div className="contact-page" name="contact-page">
      <div className="container contact-page__content">
        <section className="contact-info">
          <p className="text">Contact</p>

          <h1 className="header contact-info__title">
            Feel free to get <br />
            in touch
          </h1>

          <div className="contact-info__item">
            <MdEmail className="title contact-info__item__icon" />
            <p className="text contact-info__item__content">maciej.zarzeczny1@gmail.com</p>
          </div>

          <div className="contact-info__item">
            <MdPhone className="title contact-info__item__icon" />
            <p className="text contact-info__item__content">+48 728 368 865</p>
          </div>
        </section>

        <svg
          className="contact-page__illustration"
          xmlns="http://www.w3.org/2000/svg"
          width="459.037"
          height="380.292"
          viewBox="0 0 459.037 380.292"
        >
          <g id="illustration-contact-page" transform="translate(0.004 0.508)">
            <path
              id="Path_193"
              data-name="Path 193"
              d="M181,0A181,181,0,1,1,0,181,181,181,0,0,1,181,0Z"
              transform="translate(97.034 -0.508)"
              fill="#25272a"
            />
            <path
              id="Path_170"
              data-name="Path 170"
              d="M573.217,786.968c0,7.524-99.33,23.354-221.859,23.354S129.5,794.492,129.5,786.968s99.33-3.892,221.859-3.892S573.217,779.444,573.217,786.968Z"
              transform="translate(-129.504 -430.537)"
              fill="#3f3d56"
            />
            <path
              id="Path_171"
              data-name="Path 171"
              d="M573.217,786.968c0,7.524-99.33,23.354-221.859,23.354S129.5,794.492,129.5,786.968s99.33-3.892,221.859-3.892S573.217,779.444,573.217,786.968Z"
              transform="translate(-129.504 -430.537)"
              opacity="0.1"
            />
            <ellipse
              id="Ellipse_25"
              data-name="Ellipse 25"
              cx="222"
              cy="13.5"
              rx="222"
              ry="13.5"
              transform="translate(0.034 343.492)"
              fill="#3f3d56"
            />
            <g id="leaf" transform="translate(351.364 275.67)">
              <g id="left-leafs" transform="translate(0 16.253)">
                <path
                  id="Path_172"
                  data-name="Path 172"
                  d="M851.689,659.413c0,30.751,19.292,55.634,43.132,55.634"
                  transform="translate(-851.689 -659.413)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_174"
                  data-name="Path 174"
                  d="M883.809,665.142c0,29.21,12.3,52.846,27.5,52.846"
                  transform="translate(-868.181 -662.355)"
                  fill="#098dec"
                />
              </g>
              <g id="right-leafs" transform="translate(43.132)">
                <path
                  id="Path_173"
                  data-name="Path 173"
                  d="M940.34,714.387c0-31.1,21.528-56.259,48.133-56.259"
                  transform="translate(-940.34 -642.5)"
                  fill="#098dec"
                />
                <path
                  id="Path_175"
                  data-name="Path 175"
                  d="M940.34,697.894c0-39.734,24.883-71.887,55.634-71.887"
                  transform="translate(-940.34 -626.008)"
                  fill="#3f3d56"
                />
              </g>
              <path
                id="Path_176"
                data-name="Path 176"
                d="M921.69,771.079s6.117-.188,7.96-1.5,9.409-2.88,9.867-.775,9.192,10.471,2.286,10.526-16.046-1.076-17.886-2.2S921.69,771.079,921.69,771.079Z"
                transform="translate(-887.632 -698.8)"
                fill="#a8a8a8"
              />
            </g>
            <path
              id="Path_177"
              data-name="Path 177"
              d="M941.927,782.076c-6.906.056-16.046-1.076-17.886-2.2-1.4-.854-1.959-3.916-2.146-5.329l-.2.008s.387,4.933,2.227,6.054,10.98,2.252,17.886,2.2c1.993-.016,2.682-.725,2.644-1.776C944.171,781.668,943.411,782.064,941.927,782.076Z"
              transform="translate(-536.268 -426.609)"
              opacity="0.2"
            />
            <path
              id="Path_178"
              data-name="Path 178"
              d="M702.135,285.293s6.224,13.07,3.734,19.294,9.336,13.07,9.336,13.07l15.56-8.713v-11.2l-2.49-4.979s-9.958-5.6-8.713-14.315S702.135,285.293,702.135,285.293Z"
              transform="translate(-423.534 -170.515)"
              fill="#ffb9b9"
            />
            <path
              id="Path_179"
              data-name="Path 179"
              d="M702.135,285.293s6.224,13.07,3.734,19.294,9.336,13.07,9.336,13.07l15.56-8.713v-11.2l-2.49-4.979s-9.958-5.6-8.713-14.315S702.135,285.293,702.135,285.293Z"
              transform="translate(-423.534 -170.515)"
              opacity="0.1"
            />
            <path
              id="Path_180"
              data-name="Path 180"
              d="M658.235,407.888s-1.245,13.693-1.245,15.56-1.867,8.091-1.867,8.091-6.846,31.742-11.2,34.854-6.846,22.406,0,21.161,8.714-18.049,8.714-18.049l14.17-26.758,2.012-32.369Z"
              transform="translate(-391.459 -238.34)"
              fill="#ffb9b9"
            />
            <path
              id="Path_181"
              data-name="Path 181"
              d="M680.474,351.6h-4.979s-4.979,29.875,0,31.119,14.315,1.245,14.315,1.245Z"
              transform="translate(-408.718 -209.439)"
              fill="#575a89"
            />
            <path
              id="Path_182"
              data-name="Path 182"
              d="M616.129,684.258l2.49,11.825,4.979-3.734-2.49-10.581-4.979,1.867Z"
              transform="translate(-316.366 -349.777)"
              fill="#ffb9b9"
            />
            <path
              id="Path_183"
              data-name="Path 183"
              d="M695.216,487.2l-3.734,2.49s-1.867,21.784,2.49,38.588S701.44,565,701.44,565s7.469,49.791,9.336,51.036,13.693,1.867,14.315-.622-4.357-49.169-4.357-49.169-3.734-39.21-.622-44.189c0,0,9.958,42.945,13.07,47.3,0,0,4.357,47.3,6.846,48.546s14.315,1.867,14.937-.622-3.734-56.015-5.6-60.372-2.489-69.085-6.846-68.463S695.216,487.2,695.216,487.2Z"
              transform="translate(-417.859 -279.064)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_26"
              data-name="Ellipse 26"
              cx="14.315"
              cy="14.315"
              r="14.315"
              transform="translate(270.511 91.75)"
              fill="#ffb9b9"
            />
            <path
              id="Path_184"
              data-name="Path 184"
              d="M701.4,324.256l-3.112-5.6s-3.734-4.979-5.6-3.734-1.867,5.6-1.867,5.6-14.315,4.979-13.07,11.825,9.336,18.672,9.336,18.672,1.245,9.958,0,12.448-3.734,4.357-1.867,6.846,2.49,3.112,1.867,6.224-1.867,4.357-.622,5.6-.622,14.315-1.867,14.937,39.833,6.846,42.945,4.979,11.825-1.867,11.2-3.734-3.112-13.07-3.112-14.937,0-9.958-.622-10.581.622-9.958.622-9.958l-3.112-26.14,9.958-15.56s-2.49-8.713-14.315-9.958-15.1-4.357-15.1-4.357-1.086,5.6-3.575,6.846S701.4,324.256,701.4,324.256Z"
              transform="translate(-410.973 -186.449)"
              fill="#575a89"
            />
            <path
              id="Path_185"
              data-name="Path 185"
              d="M802.455,377.187l3.734,28.007L798.1,445.649s-3.112,23.028-9.336,22.406,0-24.9,0-24.9l4.979-37.966s-8.091-19.294-6.224-21.784S802.455,377.187,802.455,377.187Z"
              transform="translate(-466.593 -222.576)"
              fill="#ffb9b9"
            />
            <path
              id="Path_186"
              data-name="Path 186"
              d="M734.1,755.672s-8.091-4.357-9.958-3.734-3.734,9.336-3.734,9.336-14.315,10.581-4.979,13.07,13.07-3.112,13.07-3.112,9.336-4.979,9.336-6.224-1.245-9.336-1.245-9.336Z"
              transform="translate(-428.736 -414.967)"
              fill="#2f2e41"
            />
            <path
              id="Path_187"
              data-name="Path 187"
              d="M793.3,753.281s-3.734,20.539-1.245,21.784,13.07,3.112,14.315,0,1.245-10.581.622-13.07-2.49-8.713-2.49-8.713Z"
              transform="translate(-469.266 -415.688)"
              fill="#2f2e41"
            />
            <path
              id="Path_188"
              data-name="Path 188"
              d="M693.982,230.721a3.321,3.321,0,0,0-1.715-.052,5.132,5.132,0,0,0-1.728,1.411c-1.427,1.355-3.467,1.779-5.327,2.421s-3.818,1.778-4.284,3.69a20.091,20.091,0,0,0-.2,2.322c-.277,2.256-2,4.287-1.69,6.539.2,1.471,1.25,2.719,1.465,4.189.24,1.638-.588,3.343-.126,4.933.452,1.558,1.983,2.508,3.393,3.31q.907-5.758,2.179-11.45a4.137,4.137,0,0,1,.776-1.892c1.251-1.418,3.706-.61,5.33-1.579.617-.368,1.075-.975,1.723-1.285,1.876-.9,3.906,1.09,5.985,1.109.918.008,1.924-.356,2.7.135a2.467,2.467,0,0,1,.789.971c.741,1.391,1.148,2.954,2.013,4.271s2.412,2.393,3.944,2.024c-.234-1.188.7-2.257,1.069-3.41.641-1.982-.407-4.134-.154-6.2.237-1.942,1.5-4.221.114-5.6a3.934,3.934,0,0,0-1.642-.824C703.679,234.194,699.142,231.581,693.982,230.721Z"
              transform="translate(-411.653 -147.298)"
              fill="#2f2e41"
            />
            <path
              id="Path_189"
              data-name="Path 189"
              d="M791.509,331.134l6.224,2.49s8.091,26.14,6.224,26.14-18.672,4.357-18.672,2.49S786.53,331.134,791.509,331.134Z"
              transform="translate(-466.228 -198.929)"
              fill="#575a89"
            />
            <g id="third-chat" transform="translate(34.053 249.394)">
              <path
                id="Path_191"
                data-name="Path 191"
                d="M262.667,512H70v63.249h7.3v16.542L93.84,575.249H262.667Z"
                transform="translate(-70 -512)"
                fill="#3f3d56"
              />
              <g id="content" transform="translate(22.38 10.461)">
                <rect
                  id="Rectangle_118"
                  data-name="Rectangle 118"
                  width="147.906"
                  height="5.838"
                  fill="#97dffc"
                  opacity="0.3"
                />
                <rect
                  id="Rectangle_119"
                  data-name="Rectangle 119"
                  width="73.953"
                  height="5.838"
                  transform="translate(0 11.19)"
                  fill="#97dffc"
                  opacity="0.3"
                />
                <circle
                  id="Ellipse_29"
                  data-name="Ellipse 29"
                  cx="8.271"
                  cy="8.271"
                  r="8.271"
                  transform="translate(0 25.786)"
                  fill="#97dffc"
                  opacity="0.3"
                />
              </g>
            </g>
            <g id="second-chat" transform="translate(68.111 164.737)">
              <path
                id="Path_192"
                data-name="Path 192"
                d="M140,338H332.667v63.249h-7.3v16.542l-16.542-16.542H140Z"
                transform="translate(-140 -338)"
                fill="#3f3d56"
              />
              <g id="content-2" data-name="content" transform="translate(17.515 9.488)">
                <rect
                  id="Rectangle_116"
                  data-name="Rectangle 116"
                  width="147.906"
                  height="5.838"
                  fill="#098dec"
                />
                <rect
                  id="Rectangle_117"
                  data-name="Rectangle 117"
                  width="73.953"
                  height="5.838"
                  transform="translate(0 11.19)"
                  fill="#098dec"
                />
                <circle
                  id="Ellipse_28"
                  data-name="Ellipse 28"
                  cx="8.271"
                  cy="8.271"
                  r="8.271"
                  transform="translate(0 25.786)"
                  fill="#098dec"
                />
              </g>
            </g>
            <g id="first-chat" transform="translate(34.053 79.108)">
              <path
                id="Path_190"
                data-name="Path 190"
                d="M262.667,162H70v63.249h7.3v16.542L93.84,225.249H262.667Z"
                transform="translate(-70 -162)"
                fill="#3f3d56"
              />
              <g id="content-3" data-name="content" transform="translate(22.38 10.461)">
                <rect
                  id="Rectangle_114"
                  data-name="Rectangle 114"
                  width="147.906"
                  height="5.838"
                  fill="#97dffc"
                  opacity="0.3"
                />
                <rect
                  id="Rectangle_115"
                  data-name="Rectangle 115"
                  width="73.953"
                  height="5.838"
                  transform="translate(0 11.19)"
                  fill="#97dffc"
                  opacity="0.3"
                />
                <circle
                  id="Ellipse_27"
                  data-name="Ellipse 27"
                  cx="8.271"
                  cy="8.271"
                  r="8.271"
                  transform="translate(0 25.786)"
                  fill="#97dffc"
                  opacity="0.3"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <footer className="footer">
        <section>
          <a href="https://github.com/maciekz1996" target="_blank" rel="noopener noreferrer">
            <FaGithub className="title footer__icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/maciej-zarzeczny-03636918b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="title footer__icon" />
          </a>
        </section>

        <p className="text footer__content">Maciej Zarzeczny {year}</p>
      </footer>
    </div>
  );
};

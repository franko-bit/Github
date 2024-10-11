figma.showUI(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, width=device-width">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" />
    <style>
      .samsung-galaxy-s22-ultra, .samsung-galaxy-s22-ultra1 {
        position: absolute;
        width: 191px;
        height: 387px;
      }
      .samsung-galaxy-s22-ultra1 {
        left: 314px;
      }
      .samsung-galaxy-s22-ultra-portrait {
      display: flex;
flex-direction: column; /* Align items in a column */
justify-content: center; /* Center items vertically */
align-items: center; /* Center items horizontally */
// height: 100vh;
        width: 191px;
        height: 387px;
        cursor: pointer;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;

      }
      .samsung-galaxy-s22-ultra-portrait {
        width: 191px;
        height: 387px;
        border-radius: 9px;
          	border: 1px dashed #b1bfd0;
      }
      .samsung-galaxy-s22-ultra-landscape {
      position:Absolute;
      top:60px;
     
      right:60px;
        width: 807px;
        height: 280px;
        border-radius: 9px;
          	border: 1px dashed #b1bfd0;
      }
      .samsung-galaxy-s22-ultra-parent {
        position: absolute;
        top: 112px;
        left: 121px;
        width: 542px;
        height: 487px;
        
      }
      .option-a {
        position: relative;
      }
      .option-a-parent {
        position: absolute;
        top: 76px;
        left: calc(50% - 204px);
        width: 408px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 308px;
        
      }
      .group-child {
        position: absolute;
        top: 0px;
        left: 23px;
        background-color: #4c4c4c;
        width: 1px;
        height: 289px;
      }
      .group-item {
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 100px;
        background-color: #000;
        width: 47px;
        height: 47px;
      }
      .vs {
        position: absolute;
        top: 17px;
        left: 15px;
        font-weight: 900;
      }
      .rectangle-group {
        position: absolute;
        top: 122px;
        left: 0px;
        width: 47px;
        height: 47px;
      }
      .rectangle-parent {
        position: absolute;
        top: 194px;
        left: 369px;
        width: 47px;
        height: 289px;
      }
      .tag, .tag1, .tag2 {
        border-radius: 30px;
        // border: 1px solid #3c3c43;
        background-color: #3c3c43;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 70px;
        color: #fff;
        position: absolute;
      }
      .tag { top: 610px; left: 238px; }
      .tag1 { top: 624px; left: 306px; }
      .tag2 { top: 25px; left: 40px; gap: 10px; cursor: pointer; }
      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #3c3c43;
        border: 1px solid #3c3c43;
        border-radius: 4px;
        padding: 10px;
        color: #fff;
        cursor: pointer;
      }
      .dropdown-menu div {
        padding: 8px;
      }
      .dropdown-menu div:hover {
        background-color: #555;
      }
      .cancel-icon, .cancel-icon1, .arrow-drop-up-icon {
        width: 24px;
        height: 24px;
        position: absolute;
      }
      .cancel-icon { top: 96px; left: 332px; }
      .cancel-icon1 { top: 96px; left: 637px; }
      .arrow-drop-up-icon { position: relative; }
      .frame-child {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
      .group-container, .frame-div {
        position: absolute;
        top: 543px;
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 47px;
      }
      .group-container { left: 133px; }
      .frame-div { left: 441px; }
      .inactive { opacity: 0.5; }
      .active { opacity: 1; }
      .group-parent {
        width: 100%;
        height: 700px;
        position: relative;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #282828;
        overflow: hidden;
        text-align: left;
        font-size: 12px;
        color: #fff;
        font-family: Inter;
      }

     .access-token-input {
    width: 100%; /* Expands to fill the container */
    height: 100%;
    border: none;
    background: transparent;
    color: #aab6c1;
    font-size: 14px;
    outline: none;
    padding: 0 10px;
    transition: width 0.3s ease; /* Smooth transition effect */
}

.access-token-input::placeholder {
    color: #aab6c1;
}

.enter-access-token {
    position: relative;
    line-height: 150%;
    margin-bottom: 5px;
    color: #aab6c1;
}

.access-token {
    position: absolute;
    top: 50%;
    left: 11px;
    transform: translateY(-50%);
    line-height: 150%;
}

.access-token-wrapper {
    width: 60%;
    align-self: stretch;
    position: absolute;
    top: 540px;
    left: 120px;
    border-radius: 6px;
    background-color: #171717;
    height: 40px;
    overflow: hidden;
    color: #aab6c1;
    display: flex;
    align-items: center;
}



        .modal {
            display: none; /* Hidden by default */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: #333;
            color: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
            text-align: center;
        }

        .modal-content h2 {
            margin-top: 0;
            color: #fff;
        }

        .input-field {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #555;
            border-radius: 4px;
            font-size: 16px;
            background-color: #444;
            color: #fff;
        }

        .modal-content p {
            margin: 10px 0;
            font-size: 14px;
            color: #aaa;
        }

        .close-btn, .submit-btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
        }

        .close-btn {
            background-color: #f44336;
        }

        .modal-content .button-group {
            display: flex;
            justify-content: space-between;
        }

        .modal-content .button-group button {
            flex: 1;
            margin: 5px;
        }
    </style>
    
  </head>
  <body>
  
    <div class="group-parent">
      <div class="samsung-galaxy-s22-ultra-parent">
    <div class="samsung-galaxy-s22-ultra samsung-galaxy-s22-ultra-portrait frame-selection" id="frameA">
   
<br>
<b style="color:white">Tap Here and Tap Frame 1</b>
    </div>
    <div class="samsung-galaxy-s22-ultra1 samsung-galaxy-s22-ultra-portrait frame-selection" id="frameB">
<br>
<b style="color:white">Tap Here and Tap Frame 2</b>
    </div>
                </div>
      <div class="option-a-parent">
        <div class="option-a">Option A</div>
        <div class="option-a">Option B</div>
      </div>
      <div class="rectangle-parent">
        <div class="group-child"></div>
        <div class="rectangle-group">
          <div class="group-item"></div>
          <div class="vs">VS</div>
        </div>
      </div>
      <div class="tag"><b class="option-a">Create Link</b></div>
      

      <div class="group-container" id="groupContainer">
      
      <div class="frame-div" id="frameDiv">
        <?xml version="1.0" encoding="utf-8"?>
<svg width="800px" class="frame-child" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2699 16.265L20.9754 12.1852C21.1516 11.1662 20.368 10.2342 19.335 10.2342H14.1539C13.6404 10.2342 13.2494 9.77328 13.3325 9.26598L13.9952 5.22142C14.1028 4.56435 14.0721 3.892 13.9049 3.24752C13.7664 2.71364 13.3545 2.28495 12.8128 2.11093L12.6678 2.06435C12.3404 1.95918 11.9831 1.98365 11.6744 2.13239C11.3347 2.29611 11.0861 2.59473 10.994 2.94989L10.5183 4.78374C10.3669 5.36723 10.1465 5.93045 9.86218 6.46262C9.44683 7.24017 8.80465 7.86246 8.13711 8.43769L6.69838 9.67749C6.29272 10.0271 6.07968 10.5506 6.12584 11.0844L6.93801 20.4771C7.0125 21.3386 7.7328 22 8.59658 22H13.2452C16.7265 22 19.6975 19.5744 20.2699 16.265Z" fill="#FFFFFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill="#1C274C"/>
</svg>
        <div class="option-a">=</div>
        <div class="option-a" id="frameNumber">0</div>
      </div>



      
            <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <h2>Enter Your Token</h2>
            <input type="text" class="input-field" placeholder="Insert token here">
            <p>Click here to get Access Token</p>
            <div class="button-group">
                <button class="close-btn" id="closeBtn">Close</button>
                <button class="submit-btn">Submit</button>
            </div>
        </div>
    </div>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const groupContainer = document.getElementById('groupContainer');
          const frameDiv = document.getElementById('frameDiv');
          const groupNumber = document.getElementById('groupNumber');
          const frameNumber = document.getElementById('frameNumber');
          const copyLinkTag = document.querySelector('.tag');
          const tag2 = document.querySelector('.tag2');
          const dropdownMenu = document.getElementById('dropdownMenu');
          const image1 = document.getElementById('image1');
          const image2 = document.getElementById('image2');
      
  
      
          // Event listener for "Copy Link"
       
      // Select the element you want to attach the event listener to
// const copyLinkTag = document.getElementById('copyLinkTag');

const modal = document.getElementById('myModal');
        const closeBtn = document.getElementById('closeBtn');
        copyLinkTag.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

          // Toggle dropdown menu visibility
          tag2.addEventListener('click', function() {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
          });
      
          // Handle dropdown menu selection
          dropdownMenu.addEventListener('click', function(event) {
            if (event.target && event.target.matches('div[data-type]')) {
              const type = event.target.getAttribute('data-type');
              if (type === 'portrait') {
                image1.classList.remove('samsung-galaxy-s22-ultra-landscape');
                image2.classList.remove('samsung-galaxy-s22-ultra-landscape');
                image1.classList.add('samsung-galaxy-s22-ultra-portrait');
                image2.classList.add('samsung-galaxy-s22-ultra-portrait');
              } else if (type === 'landscape') {
                image1.classList.remove('samsung-galaxy-s22-ultra-portrait');
                image2.classList.remove('samsung-galaxy-s22-ultra-portrait');
                image1.classList.add('samsung-galaxy-s22-ultra-landscape');
                image2.classList.add('samsung-galaxy-s22-ultra-landscape');
              }
              dropdownMenu.style.display = 'none';
            }
          });
        });


document.getElementById("frameA").addEventListener("click", () => {
        parent.postMessage({ pluginMessage: { type: 'select-frame', frame: 'A' } }, '*');
      });

      document.getElementById("frameB").addEventListener("click", () => {
        parent.postMessage({ pluginMessage: { type: 'select-frame', frame: 'B' } }, '*');
      });

const frames = ['frameA', 'frameB'];

      frames.forEach((frame) => {
        const element = document.getElementById(frame);
        element.addEventListener("dragover", (e) => {
          e.preventDefault();
        });

        element.addEventListener("drop", (e) => {
          e.preventDefault();
          if (draggedItem === 'A' && frame === 'frameA') {
            parent.postMessage({ pluginMessage: { type: 'vote', like: 'A', dislike: 'B' } }, '*');
          } else if (draggedItem === 'B' && frame === 'frameB') {
            parent.postMessage({ pluginMessage: { type: 'vote', like: 'B', dislike: 'A' } }, '*');
          }
        });
      });

window.onmessage = (event) => {
        const msg = event.data.pluginMessage;
        if (msg.type === 'display-frame-image') {
          if (msg.frame === 'A') {
            document.getElementById('frameA').style.backgroundImage = 'url(' + msg.image + ')';
            document.getElementById('frameA').textContent = '';
          } else if (msg.frame === 'B') {
            document.getElementById('frameB').style.backgroundImage = 'url(' + msg.image + ')';
            document.getElementById('frameB').textContent = '';
          }
        }
      };
      </script>
    
    </div>
      <div class="enter-access-token-parent">
      			
      			<div class="access-token-wrapper">
                    <input class="access-token-input" type="text" placeholder="Design description ...">
                </div>
      			<div class="button">
        				        		
        				<div class="icon-r"></div>
      			</div>
    		</div>
  </body>
  </html>
  `, { width: 770, height: 700 });

figma.ui.onmessage = async (msg) => {
if (msg.type === 'select-frame') {
  const selection = figma.currentPage.selection;

  if (selection.length !== 1 || selection[0].type !== 'FRAME') {
    figma.notify('Please select one frame.');
    return;
  }

  const selectedFrame = selection[0] as FrameNode;


  const imageBytes = await selectedFrame.exportAsync({ format: 'JPG', constraint: { type: 'SCALE', value: 2 } });
  const imageBase64 = `data:image/jpeg;base64,${figma.base64Encode(imageBytes)}`;

  // Send the image data to the UI to display
  figma.ui.postMessage({ type: 'display-frame-image', frame: msg.frame, image: imageBase64 });
}}
  
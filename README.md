# Portfolio

### Demo 

- website : 

### Purpose of the project 

- Website which can show myself
- Make interactive website with mouse actions

### Used Skills

- React
- SCSS
- Javascript

### Advanced Feature
#### Mouse Events
- Zoom the background image in and out when moving the mouse up and down by changing the image scale value
    > Used onMouseMove function to get the current Y location of the mouse
    - Zoom in & out
    ---
    ```ts
    const [zoom,setZoom] = useState({scale:1});

    const handleScale=(e)=>{
        if(pin){
        setZoom({scale:1});
        }
        else{
        let scale=0;
        //zoom out when the mouse is half way up from the screen
        if(e.clientY<=window.innerHeight*1/2){
            scale = (e.clientY-window.innerHeight)*0.0001;
            if(zoom.scale<=1.1){
            scale=0;
            }
        }
        //zoom in when moving the mouse down
        else{
            scale = e.clientY*0.0001;
        }
        const newScale = scale+zoom.scale;
        setZoom({scale:newScale});
        }
    }
    ```

    - Fix the image scale
    ---
    ```ts
    const [pin,setPin] = useState(false);

    const pinch=()=>{
        setPin(value=>!value);
    }
        const pinchTrue=()=>{
        setPin(true);
    }
    ```

    - Refresh the image into original Scale
    ---
    ```ts
    const refresh=()=>{
        setZoom({scale:1});
    }
    ```

### Things to improve

- When a empty link is selected from the website, the pin function is being diabled.

- Lack of Responsive Feature


    


function scrollCard(){
    let speed = 2;

    let scrolls = document.querySelector('.therd_nav_elements');
    let scroll_item = document.querySelectorAll('.therd_nav_element')
    let drag = false;
    let left = 0;
    let position_X = 0;
    scrolls.addEventListener('mousedown', function(e){
        drag = true;
        position_X = e.pageX - this.offsetLeft;
    });
    document.addEventListener('mouseup', function(){
        drag = false;
        left = scrolls.scrollLeft;
    });
    scrolls.addEventListener('mousemove', function(e){
        if(drag){
            this.scrollLeft = left - (e.pageX - this.offsetLeft - position_X)*speed;
        }
    });

    scroll_item.forEach((item)=>{
        item.addEventListener('mousedown', function(e){
            e.preventDefault();})
    })   
}
export {scrollCard};


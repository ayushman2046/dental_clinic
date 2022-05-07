


var data=[];
const getdata=async()=>{
    let url="http://localhost:5000/blog/getblogpost";

		let response=await fetch(url);

		let json1=await response.json();

        data=json1.data;
        let id=localStorage.getItem('blogimageid');

        let postobj={};

        let recentblog="";
        for(let element of data)
        {
            
            if(element._id==id)
            {
            
                postobj=element
            
            }
            
            recentblog+=`<div class="block-21 mb-4 d-flex">
            <a class="blog-img mr-4" style="background-image: url(http://localhost:5000/blogimages/${element.blogimage});"></a>
            <div class="text">
              <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              <div class="meta">
                <div><a href="#"><span class="icon-calendar"></span> May 22, 2019</a></div>
                <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                <div><a href="#"><span class="icon-chat"></span> 19</a></div>
              </div>
            </div>
          </div>`
        }

        $('#RecentBlog').html(recentblog);

    


    imageUrl=`http://localhost:5000/blogimages/${postobj.blogimage}`;
    $('#blogimage').css('background-image', 'url(' + imageUrl + ')');

    console.log($('.BlogDetail').text(postobj.title));
    console.log($('.blogcontent').text(postobj.content));


        
}
$(document).ready(function(){

   getdata();


    

})
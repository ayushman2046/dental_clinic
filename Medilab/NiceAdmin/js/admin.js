
var blog_image={}
var obj=[];
 const call= async ()=>{
    let url="http://localhost:5000/user/getappointment";

    let res= await fetch(url);

    let json1= await res.json();

    console.log(json1.data);
    obj=json1.data;
    console.log(obj);

      let str="";
      let notification=0;
      let readnotification="";
      for(let element of obj)
      {
        
       
        let D=new Date(element.date)
        let month=D.getMonth();
        let year=D.getFullYear();
        let day=D.getDate();

        console.log(month,year,day);
        if(element.active==false){
          
          notification++;
          readnotification+=`
          <li >
                            <a style="color:black" href="#">
                              <span class="label label-primary"
                                ><i class="icon_profile"></i
                              ></span>
                              ${element.name} want to consult with you
                              <span class="small italic pull-right">${element.date}</span>
                            </a>
                          </li> `


          str+=`<tr id=${element._id}>
          <td>Today</td>
          <td>${element.name}</td>
          
          <td>
    
          <span class="badge bg-primary">${day}/${month+1}/${year}</span>

          </td>
          <td>
    
            <button class="btn-success btn " id=${element._id}first  onclick="acceptfunction('${element._id}')">Accept</button>

          </td>
          
          <td>
          <button class="btn-danger btn" id={${element._id}}second onclick="rejectfunction('${element._id}')">Reject</button>
            
          </td>
          <td>
            <span class="profile-ava">
              <img style="height:45px"
                alt=""
                class="simple"
                src="/NiceAdmin/img/87-877270_logo-icon-profile-png-transparent-png.png"
              />
            </span>
          </td>
        </tr>`;
        }
      }

      $('#appointment').html(str);

      $('#notification').html(notification)
      let temp=`
      <li>
            <p class="blue">You have ${notification} new notifications</p>
          </li>`;
          $('.countnotification').html(temp)

  
      $('.readnotification').html(readnotification);



    

 }


 async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

  console.log(formDataJsonString,"hii");




	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};





	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}
const uploadimages=async(event)=>{
  console.log("uploading");
  

  let url="http://localhost:5000/api/image/upload";
        

        const formdata=new FormData();
        formdata.append("testImage",blog_image);

        const options = {
            method: 'POST',
            body: formdata,
          };
          fetch(url, options).then(()=>{
            
            console.log("uploaded mere bhai");
              
          });


}
$(document).ready(  ()=>{
  $(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);

            console.log(this.files[0]);
            blog_image=this.files[0];

           
            
            
            
        }
    });
});

function imageIsLoaded(e) {
  
    $('#myImg').attr('src', e.target.result);
    $('#yourImage').attr('src', e.target.result);
};

      call();

      $("#blogpublish").submit(async function( event ) {
        event.preventDefault();
        event.cancelable
        const form = event.currentTarget;
const url = "http://localhost:5000/blog/createblogpost";

try {
const formData = new FormData(form);

formData.append("blogimage",blog_image.name);




const responseData = await postFormDataAsJson({ url, formData });
uploadimages();

console.log({ responseData });

} catch (error) {
alert(error,"what is your name");
}
 
        

          
        })

      


   
})
  async function acceptfunction(id){

    
      

    let url="http://localhost:5000/user/updateappointment";

    let res=await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:id,
        flag1:1,
        flag2:1
      })
    })

  //  console.log( $(`#${id}`).html());
  $(`#${id}`).hide();

  

}
  async function rejectfunction(id){
    //  console.log(id)
    let url="http://localhost:5000/user/updateappointment";

    let res=await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:id,
        flag1:2,
        flag2:1
      })
    })
    $(`#${id}`).hide();

}



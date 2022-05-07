console.log("hii we are hearing")
	const blogandNews=async()=>{
		let url="http://localhost:5000/blog/getblogpost";

		let response=await fetch(url);

		let json1=await response.json();

		if(json1.success)
		{
			console.log(json1.data);

		let str="";
		let bloglist=`<tr>
		<th><i class="icon_profile"></i> Author</th>
		<th><i class="icon_calendar"></i> Date</th>
		<th><i class="icon_mail_alt"></i>Title</th>
		<th></th>
		<th></th>
		<th><i class="icon_cogs"></i> Action</th>
	  </tr>`;

		for(let element of json1.data)
		{

			let d=new Date(element.date);

			let day=d.getDate();
			let month=d.getMonth();
			let year=d.getFullYear();
			bloglist+=` <tr id=${element._id} >
			<td>Dr. Mangesh Mhajan</td>
			<td>${day}/${month+1}/${year}</td>
			<td>${element.title}</td>
			<td></td>
			<td>${element._id}</td>
			<td>
			  <div class="btn-group">
				<a class="btn btn-danger" href="#" onclick="blogfunc('${element._id}')"><i class="icon_close_alt2"></i></a>
			  </div>
			</td>
		  </tr>`;



             str+=`<div class="col-lg-4 col-md-6 d-flex align-items-stretch" id=${element._id}>
			 <div class="gallery-item">
			   <a href="/blog/blog-single.html" class="galelry-lightbox" onclick="blogpage('${element._id}')">
				 <img src=http://localhost:5000/blogimages/${element.blogimage} alt="" class="img-fluid">
			   </a>
			   <div class="row">
				 <div class="row">
				   <h3>
 
					 <a style="font-size: 22px;" href="#">${element.title.slice(0,50)}</a>
				   </h3>
				 </div>
				 <div class="row">
				   <p>${element.description.slice(0,100)}.......</p>
 
				 </div>
				 <div class="col-6  my-2">
 
				   <button class="btn-primary btn">  <a style="color:white" href="/blog/blog-single.html" onclick="blogpage('${element._id}')">Read More</a></button>
				 </div>
			   </div>
			 </div>
		   </div>
 `
		}

		$('#newsblog').html(str);
		$('.bloglist').html(bloglist);
	}
	else
	{
		alert("Somehthing error")
	}
	}

	function blogpage(id){
		localStorage.setItem('blogimageid',id);
		
	}
    async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		
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

    $(document).ready( ()=>{

        $("#appointmentform").submit(async function( event ) {
            event.preventDefault();
            const form = event.currentTarget;
	const url = "http://localhost:5000/user/appointment";

	try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });

		console.log({ responseData });

		window.location='/index.html';
    
	} catch (error) {
		alert.error(error);
	}
            

              
            })


			blogandNews();





			
        })

async function blogfunc(id)
{
	console.log(id);

	let url="http://localhost:5000/blog/deleteblogpost";

	let res=await fetch(url,{
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({id:id})
	})


	$(`#${id}`).hide();
}



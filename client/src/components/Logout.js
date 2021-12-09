import swal from 'sweetalert';
export default function Logout(){

    function takeMeOut(){
        swal({
            title: "Are yu sure ?",
            text: "Once logged out, You have to login again",
            icon: 'warning',
            buttons:true,
            dangerMode:true
        })
        .then((res) => {
            if (res) {
                localStorage.removeItem('token');
                swal({
                    title:"Success",
                    text:"You logged out successfully",
                    icon:"success"
                })
                .then((ok)=>{
                    window.location = "/";
                })
            }
        });
    }

    return(
        <>
            <button className="btn btn-danger" onClick={takeMeOut}>Logout</button>
        </>
    )
}
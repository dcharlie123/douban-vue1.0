<template>
    <div v-show="loading" class="loading">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </div>
</template>
<script>
    export default{
        props:{
            loading:{
                 type:Boolean
            }
        }
    }
</script>
<style lang="">
    .loading{
        position: fixed;
        top: 50%;left: 50%;
        transform: translate(-50%,-50%);
    }
    .loading i {
        display: inline-block;
        width: 4px;
        height: 35px;
        border-radius: 2px;
        background-color: #333;
        margin: 0 2px;
    }
    @-webkit-keyframes loading{
		0%{
			transform: scale(1);
		}
		50%{
			transform: scale(0.4);
		}
		100%{
			transform: scale(1);
		}			
	}
	.loading i:nth-child(1){
		-webkit-animation:loading 1s ease-in 0.1s infinite;
	}
	.loading i:nth-child(2){
		-webkit-animation:loading 1s ease-in 0.2s infinite;
	}
	.loading i:nth-child(3){
		-webkit-animation:loading 1s ease-in 0.3s infinite;
	}
	.loading i:nth-child(4){
		-webkit-animation:loading 1s ease-in 0.4s infinite;
	}
	.loading i:nth-child(5){
		-webkit-animation:loading 1s ease-in 0.5s infinite;
	}
	.loading i:nth-child(6){
		-webkit-animation:loading 1s ease-in 0.6s infinite;
	}
</style>
<template>
    <header>
        <h1><router-link :to="{name: 'Start'}">Japan Ni</router-link></h1>
        <nav>
			<ul>
				<li><router-link exact :to="{name: 'Travel'}" id="nav-parcourir">Parcourir</router-link></li>
				<li><router-link exact :to="{name: 'Start'}" id="nav-photos">Photos</router-link></li>
			</ul>
		</nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>


<style scoped>
    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
        color: white;
        padding: 50px 10%;
        position: absolute;
    }
    h1 a{
        color: white;
        text-decoration: none;
        -webkit-text-fill-color: transparent !important;
        -webkit-background-clip: text !important;
        background: url(../assets/japan.png) center no-repeat;
        background-position: 0px 0px;
        background-size: cover;
        transition: all 0.5s;
    }
    h1 a:hover{
        background-position: 0px -20px;
    }

    nav ul{
        display: flex;
        list-style: none;
        padding: 0;
        height: 100%;
        align-items: center;
        font-size: 1.5em;
    }

    nav ul li{
        height: 100%;
        margin: 0px 20px;
    }
    nav ul li a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        opacity: 0.3;
        color: white;
        text-decoration: none;
        transition: all 0.3s;
    }
    nav ul li a:hover{
        opacity: 0.6;
    }

    nav ul li a.router-link-active{
        opacity: 1;
    }

</style>

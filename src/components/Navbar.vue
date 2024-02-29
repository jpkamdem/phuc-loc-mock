<script setup lang="ts">

</script>

<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/"><img src="./icons/Logo/Phuc_Loc_no_bg.png" alt=""></RouterLink> 
            </li>
            <li><RouterLink to="/carte">CARTE</RouterLink></li>
            <li><RouterLink to="infos">INFOS</RouterLink></li>
            <li><RouterLink to="/panier">PANIER</RouterLink></li>
        </ul>
    </nav>
</template>

<style>

nav ul {
    display: flex;
    align-items: center;
    background: black;
    box-shadow: 0 1px 5px black;
}

ul li {
    color: #fff;
    list-style-type: none;
    padding: 0 .8em;
    height: 100%;
    font-size: 1.3em;
}

ul li:hover {
    color: #EF3720;
}

ul li:first-of-type {
    padding: .1em;
}

li img {
    height: 90px;
}
#s-list {
    height: 40px;
}
a.router-link-exact-active {
    font-weight:lighter;
    color:#EF3720;
}
</style>
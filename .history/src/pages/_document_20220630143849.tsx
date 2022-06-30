import Document, {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document{
render(){
return(
<Html>

<Head>
    <title>Creative - web design</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
   
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap"
        rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

</Head>

<body>
    <Main />
    <NextScript />
</body>


</Html>


)
}
}
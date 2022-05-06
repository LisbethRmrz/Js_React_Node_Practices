let shortenButton = document.getElementById( 'shortenButton' );
let textArea = document.getElementById('getShortedUrl');
let copyButton = document.getElementById('copyButton');
let refreshButton = document.getElementById('refreshButton');

let baseUrl = "https://api.rebrandly.com/v1/links";
let headers = {
    'Content-Type': 'application/json',
    'apiKey': "69c42da67ee84e63aebbd7dc249a0a4d"
}

const apiCall = (e) => {
    if(e){
        e.preventDefault();
        let getDestination = document.getElementById('textUrl').value;
        let linkRequest = {
            destination: getDestination,
            domain: { fullName: "rebrand.ly" }
        }

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(linkRequest),
            headers: headers,
        }).then(response => {
                if (response.ok){
                    console.log("OK");
                    return response.json();
                }
            throw new Error('Request has failed!');
        }, networkError => console.log(networkError.message))
        .then(link => {getShortedUrl(link)});
    }
}

const getShortedUrl = (link) => {
    let linkResult = document.createTextNode(link.shortUrl);
    textArea.appendChild(linkResult);

    refreshButton.classList.remove('disabled');
}

const copyLink = () => {
    /* Select the text field */
  textArea.select();
  textArea.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(textArea.value);
}

const reloadPage = () => {
    document.location.reload();
}

shortenButton.addEventListener( 'click', apiCall, true );
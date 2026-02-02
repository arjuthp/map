//get domain/host name

function getDomainNameFromURL(url){
    const urlObj = new URL(url)
    return urlObj.hostname

}

const bootdevURL = 'https://boot.dev/learn/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The name for ${bootdevURL} is ${domainName}`);



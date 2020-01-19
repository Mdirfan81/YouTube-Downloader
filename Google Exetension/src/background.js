chrome.runtime.onMessage.addListerner(function(request, sender, callback){
    console.log("received", request, sender, callback);

     chrome.downloads.download({url: request.url, filename: request.name.replace("?", "")});
});


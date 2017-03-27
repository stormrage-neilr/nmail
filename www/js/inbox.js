/**
 * Created by neilrafferty on 16/03/2017.
 */
// function inboxes(inboxes){
//     this.totalMessages = 0;
//     for(var i = 0; i < inboxes.length; i ++)
//     {
//         totalMessages += inboxes[i].totalMessages;
//     }
//     this.inboxes = inboxes;
// }
//
// function inbox(contactName, totalMessages, emails, toAddress){
//     this.contactName
//     this.totalMessages = totalMessages;
//     this.emails = emails;
//     this.toAddress = toAddress;
// }
//
// function email(fromName, fromAddress, date, subject, body){
//     this.fromName = fromName;
//     this.fromAddress = fromAddress;
//     this.date = date;
//     this.subject = subject;
//     this.body = body;
// }

$(document).ready(function() {
    var emails;
    setInboxes();

    function setInboxes(){
        $.ajax({
            url: "../php/get-mail.php",
            type: "get",
            success: function (response) {
                inboxes = JSON.parse(response);
                emails = getEmails()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Something went wrong :( Please try again." + jqXHR.responseText);
            }
        });
    }

    function getEmails() {
        var emails = [];
        for (var i = 0; i < inboxes.inboxes.length; i++) {
            for (var j = 0; j < inboxes.inboxes[i].emails.length; j++) {
                var email = inboxes.inboxes[i].emails[j];
                var date = new Date(email.date);
                var fromAddress = email.fromAddress;
                var toAddress = inboxes.inboxes[i].toAddress;
                var fromName = email.fromName;
                var contactName = inboxes.inboxes[i].name;
                var subject = email.subject;
                var body = email.body;
                var bodyhtml = email.bodyhtml;
                emails.push(
                    {
                        'index': i,
                        'date': date,
                        'fromAddress': fromAddress,
                        'toAddress': toAddress,
                        'fromName': fromName,
                        'contactName': contactName,
                        'subject': subject,
                        'body': body,
                        'bodyhtml': bodyhtml
                    });
                displayEmail(emails[emails.length-1])
            }
        }
        return emails;
    }

    function setDisplay(){
        var emails = getEmails().sort(function(a,b) {
            return b.date - a.date;
        });
        for (var i = 0; i < emails.length; i++){
            displayEmail(emails[i]);
        }
    }

    function displayEmail(email){
        var html = '<div id="email-panel-'+email.index+'" class="panel panel-default"><div class="panel-body">';
        html += '<label class="email-label">'+email.fromAddress+'</label>';
        html += '<label class="contact-label">via '+email.contactName+'</label><br>';
        html += '<label class="subject-label">Subject: '+email.subject+'</label><br>';
        html += '<label class="content-label">'+email.body+'</label><br></div></div>';
        $('#inbox-section').append(html);
        $('#email-panel-'+email.index).on('click', '*', function(){
            //show modal
        });
    }
});

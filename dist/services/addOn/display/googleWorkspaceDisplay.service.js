"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyToSend = void 0;
function propertyToSend(rule, objectContent, isSms = false) {
    let toRet;
    let link;
    if (isSms)
        link = `Resource : ` + rule?.objectName + ` : `;
    else
        link = `Resource : ` + rule?.objectName + ` : <a href="`;
    switch (rule?.objectName) {
        case "drive":
            toRet = link + `https://drive.google.com/drive/u/1/folders/` + objectContent?.id + (isSms ? ' ' : '">') + ' ' + objectContent?.name + (isSms ? `.` : `</a>`);
            break;
        case "calendar":
            toRet = link + `https://workspace.google.com/` + (isSms ? ' ' : '">') + ' Calendar : ' + objectContent?.id + ' Etag : ' + objectContent?.etag + (isSms ? `.` : `</a>`);
            break;
        case "file":
            toRet = link + objectContent?.webViewLink + (isSms ? ' ' : '">') + ' File : ' + objectContent?.name + ' Id : ' + objectContent?.id + (isSms ? `.` : `</a>`);
            break;
        case "role":
            toRet = link + `https://workspace.google.com/` + (isSms ? ' ' : '">') + ' Role : ' + objectContent?.roleName + ' Id : ' + objectContent?.roleId + (isSms ? `.` : `</a>`);
            break;
        case "domain":
            toRet = link + `https://workspace.google.com/` + (isSms ? ' ' : '">') + ' Domain : ' + objectContent?.domainName + ' Etag : ' + objectContent?.domainInfos?.etag + (isSms ? `.` : `</a>`);
            break;
        case "user":
            toRet = link + `https://workspace.google.com/` + (isSms ? ' ' : '">') + ' User Email : ' + objectContent?.primaryEmail + ' Id : ' + objectContent?.id + (isSms ? `.` : `</a>`);
            break;
        case "":
            toRet = link + `https://workspace.google.com/` + (isSms ? ' ' : '">') + ' Role : ' + objectContent?.roleName + ' Id : ' + objectContent?.roleId + (isSms ? `.` : `</a>`);
            break;
        default:
            toRet = link + `https://workspace.google.com/` + (isSms ? ' ' : '">') + ' Id: ' + objectContent?.id + ' Etag : ' + objectContent?.etag + (isSms ? `.` : `</a>`);
            break;
    }
    return toRet;
}
exports.propertyToSend = propertyToSend;
//# sourceMappingURL=googleWorkspaceDisplay.service.js.map
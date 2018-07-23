"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("vsts-task-lib/task");
const path = require("path");
exports.findFiles = (parameters) => {
    console.log(`Searching ${parameters.digitalSourceFolder} for files to upload`);
    parameters.digitalSourceFolder = path.normalize(parameters.digitalSourceFolder);
    const allPaths = tl.find(parameters.digitalSourceFolder);
    tl.debug(tl.loc('AllPaths', allPaths));
    const matchedPaths = tl.match(allPaths, parameters.digitalGlobExpressions, parameters.digitalSourceFolder);
    tl.debug(tl.loc('MatchedPaths', matchedPaths));
    const matchedFiles = matchedPaths.filter(itemPath => !tl.stats(itemPath).isDirectory());
    tl.debug(tl.loc('MatchedFiles', matchedFiles));
    tl.debug(tl.loc('FoundNFiles', matchedFiles.length));
    return matchedFiles;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUF3QztBQUN4Qyw2QkFBNEI7QUFFZixRQUFBLFNBQVMsR0FBRyxDQUFDLFVBQXNCLEVBQVksRUFBRTtJQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsVUFBVSxDQUFDLG1CQUFtQixzQkFBc0IsQ0FBQyxDQUFBO0lBRTlFLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUM3QyxVQUFVLENBQUMsbUJBQW1CLENBQy9CLENBQUE7SUFFRCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBRXhELEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUV0QyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUMzQixRQUFRLEVBQ1IsVUFBVSxDQUFDLHNCQUFzQixFQUNqQyxVQUFVLENBQUMsbUJBQW1CLENBQy9CLENBQUE7SUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFFOUMsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FDdEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQzlDLENBQUE7SUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNwRCxPQUFPLFlBQVksQ0FBQTtBQUNyQixDQUFDLENBQUEifQ==
import { Parameters } from './Parameters'
import * as tl from 'vsts-task-lib/task'
import * as path from 'path'

export const findFiles = (parameters: Parameters): string[] => {
  parameters.digitalSourceFolder = path.normalize(
    parameters.digitalSourceFolder
  )

  const allPaths = tl.find(parameters.digitalSourceFolder) // default find options (follow sym links)

  const matchedPaths = tl.match(
    allPaths,
    parameters.digitalGlobExpressions,
    parameters.digitalSourceFolder
  ) // default match options

  const matchedFiles = matchedPaths.filter(
    itemPath => !tl.stats(itemPath).isDirectory()
  ) // filter-out directories
  return matchedFiles
}

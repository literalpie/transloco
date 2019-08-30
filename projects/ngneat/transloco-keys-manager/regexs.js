const { sanitizeForRegex } = require('./helpers');

const regexs = {
  structural: /<([a-zA-Z-]*)[^*>]*\*transloco=(?:'|")\s*let\s+(?<varName>\w*)[^'"]*(?:'|").*>[^]+?<\/\1>/g,
  templateKey: varName => new RegExp(`${varName}(?:(?:\\[(?:'|"))|\\.)([^}|]*)`, 'g'),
  template: /<ng-template[^>]*transloco[^>]*>[^<]*<\/ng-template/g,
  directive: /\stransloco="(?<key>[^"]*)"/g,
  pipe: /{{\s*(?:'|")(?<key>[^}\r\n]*)(?:'|")\s*\|\s*(?:transloco)/g,
  bindingPipe: /=(?:'|")(?:\s*(?:'|")(?<key>[^}\r\n]*)(?:'|")\s*\|)\s*(?:transloco)/g,
  fileLang: /(?<fileLang>[^./]*)\.json/,
  serviceInjection: /[^]*(?=(?:private|protected|public)\s+(?<serviceName>[^,:()]+)\s*:\s*(?:TranslocoService\s*(?:,|\))))[^]*/g,
  translationCalls: name =>
    new RegExp(
      `(?:(?:\\s*|this\\.)${sanitizeForRegex(
        name
      )})(?:\\s*\\t*\\r*\\n*)*\\.(?:\\s*\\t*\\r*\\n*)*(?:translate|selectTranslate)\\([^'"]*('|")(?<key>[^"']*)\\1[^)]*\\)`,
      'g'
    )
};

module.exports = { regexs };

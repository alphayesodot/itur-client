class ReportManager {
  static async createReport(req, res) {
    res.send(`"תוצאות","ת.ז מראיינים","מיקום הראיון","זמן הראיון","שם משפחה מלשב","שם פרטי מלשב","ת.ז מלשב","מספר מסלול","שם מסלול"
    "{""questionnaire"":[""60ae7ce0271ed648d4a38fef"",""60af5a0dc323bb047cdf137e""],""notes"":[{""_id"":""608ec9d5ccdb0a474493c7de"",""wroteBy"":""606ac716585a4237379a978d"",""note"":""koksinel met""},{""_id"":""608ec9e4ccdb0a474493c7e0"",""wroteBy"":""606ac716585a4237379a978d"",""note"":""koksinel met""}],""videoUrl"":""asdf.com""}","[""60242603973fa549bc148900"",""606ac716585a4237379a978d"",""1200007b973fa549bc148927""]","kirya","2021-05-31T06:47:41.818Z","קליינאוורדמן","נעם יהונתן","324828060","123123123","node-1"`);
  }
}

export default ReportManager;

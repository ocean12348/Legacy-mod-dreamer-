G.AddData({
    Name:'Dreams',
    Author:'ocean12348',
    desc:'Adds more dream people',
    engineVersion:1,
    manifest:'https://rawgit.com/Generatoror/hello-world/master/catManifest.js',
    requires:['Default dataset*'],
    sheets:{'thotSheet':'/thotModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
    func:function()
    {
		new G.Unit({
		name:'dreamer',
		desc:'@generates [insight] more frequently than a [dreamer]<>A [thot] spends their time observing, thinking, and wondering why things are the way they are.',
		icon:[0,0,'thotSheet'],
		cost:{'food':5},
		use:{'worker':0},
		effects:[
			{type:'gather',what:{'insight':99.0}},
			{type:'gather',what:{'insight':99.0},req:{'symbolism':true}},
			{type:'mult',value:1.2,req:{'wisdom rituals':'on'}}
		],
		category:'discovery',
		req:{'construction':true},
		limitPer:{'house':1},
		});
    }
});

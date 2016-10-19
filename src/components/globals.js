let statsConfig = {
	"careerColumns": {
		"hitting": [
			{"title":"Year",    "dataField":"season"},
                  {"title":"Team",    "dataField":"team_abbrev",    "sortField":"team_link",   "type":"Text"},
                  {"title":"LG",      "dataField":"league",  "sortField":"league_link",        "type":"Text", "description":"League"},
                  {"title":"Level",   "dataField":"sport",  "type":"Text"},
                  {"title":"G",       "dataField":"g",     "sortState":"desc",    "description":"Games"},
                  {"title":"AB",      "dataField":"ab",    "sortState":"desc",    "description":"At Bats"},
                  {"title":"R",       "dataField":"r",     "sortState":"desc",    "description":"Runs"},
                  {"title":"H",      "dataField":"h",      "sortState":"desc",    "description":"Hits"},
                  {"title":"TB",     "dataField":"tb",     "sortState":"desc",    "description":"Total Bases"},
                  {"title":"2B",     "dataField":"d",      "sortState":"desc",    "description":"Doubles"},
                  {"title":"3B",     "dataField":"t",      "sortState":"desc",    "description":"Triples"},
                  {"title":"HR",     "dataField":"hr",     "sortState":"desc",    "description":"Home Runs"},
                  {"title":"RBI",    "dataField":"rbi",    "sortState":"desc",    "description":"Runs Batted In"},
                  {"title":"BB",     "dataField":"bb",     "sortState":"desc",    "description":"Bases on Balls"},
                  {"title":"IBB",    "dataField":"ibb",    "sortState":"desc",    "description":"Intentional Bases on Balls"},
                  {"title":"SO",     "dataField":"so",     "sortState":"desc",    "description":"Strikeouts"},
                  {"title":"SB",     "dataField":"sb",     "sortState":"desc",    "description":"Stolen Bases"},
                  {"title":"CS",     "dataField":"cs",     "sortState":"desc",    "description":"Caught Stealing"},
                  {"title":"AVG",    "dataField":"avg",    "sortState":"desc",    "description":"Batting Average"},
                  {"title":"OBP",    "dataField":"obp",    "sortState":"desc",    "description":"On Base Percentage"},
                  {"title":"SLG",    "dataField":"slg",    "sortState":"desc",    "description":"Slugging Percentage"},
                  {"title":"OPS",    "dataField":"ops",    "sortState":"desc",    "description":"On Base Plus Slugging"},
                  {"title":"GO/AO",  "dataField":"go_ao",  "sortState":"desc",    "description":"Ground Outs/Air Outs"}
		],
		"pitching": [
			{"title":"Year",    "dataField":"season"},
                  {"title":"Team",    "dataField":"team_abbrev",    "sortField":"team_link",   "type":"Text"},
                  {"title":"LG",      "dataField":"league",  "sortField":"league_link",        "type":"Text", "description":"League"},
                  {"title":"Level",   "dataField":"sport",        "type":"Text"},
                  {"title":"W",       "dataField":"w",     "sortState":"desc",  "description":"Wins"},
                  {"title":"L",       "dataField":"l",     "sortState":"desc",  "description":"Losses"},
                  {"title":"ERA",     "dataField":"era",   "sortState":"desc",  "description":"Earned Run Average"},
                  {"title":"G",      "dataField":"g",      "sortState":"desc",  "description":"Games"},
                  {"title":"GS",     "dataField":"gs",     "sortState":"desc",  "description":"Games Started"},
                  {"title":"CG",     "dataField":"cg",     "sortState":"desc",  "description":"Complete Games"},
                  {"title":"SHO",    "dataField":"sho",    "sortState":"desc",  "description":"Shutouts"},
                  {"title":"SV",     "dataField":"sv",     "sortState":"desc",  "description":"Saves"},
                  {"title":"SVO",    "dataField":"svo",    "sortState":"desc",  "description":"Save Opportunities"},
                  {"title":"IP",     "dataField":"ip",     "sortState":"desc",  "description":"Innings Pitched"},
                  {"title":"H",      "dataField":"h",      "sortState":"desc",  "description":"Hits"},
                  {"title":"R",      "dataField":"r",      "sortState":"desc",  "description":"Runs"},
                  {"title":"ER",     "dataField":"er",     "sortState":"desc",  "description":"Earned Runs"},
                  {"title":"HR",     "dataField":"hr",     "sortState":"desc",  "description":"Home Runs"},
                  {"title":"HB",     "dataField":"hb",     "sortState":"desc",  "description":"Hit Batsmen"},
                  {"title":"BB",     "dataField":"bb",     "sortState":"desc",  "description":"Bases on Balls"},
                  {"title":"IBB",    "dataField":"ibb",    "sortState":"desc",  "description":"Intentional Bases on Balls"},
                  {"title":"SO",     "dataField":"so",     "sortState":"desc",  "description":"Strikeouts"},
                  {"title":"AVG",    "dataField":"avg",    "sortState":"desc",  "description":"Batting Average"},
                  {"title":"WHIP",   "dataField":"whip",   "sortState":"desc",  "description":"Walks and Hits per Inning Pitched"},
                  {"title":"GO/AO",  "dataField":"go_ao",  "sortState":"desc",  "description":"Ground Outs/Air Outs"}
		],
		"fielding": [
			{"title":"Year",    "dataField":"season"},
                  {"title":"Team",    "dataField":"team_abbrev",    "sortField":"team_link",   "type":"Text"},
                  {"title":"LG",      "dataField":"league",  "sortField":"league_link",        "type":"Text", "description":"League"},
                  {"title":"Level",   "dataField":"sport",        "type":"Text"},
                  {"title":"POS",     "dataField":"position_txt", "sortField":"position", "description":"Position"},
                  {"title":"G",       "dataField":"g",       "sortState":"desc",    "description":"Games"},
                  {"title":"GS",      "dataField":"gs",      "sortState":"desc",    "description":"Games Started"},
                  {"title":"INN",    "dataField":"inn",      "sortState":"desc",    "description":"Innings At This Position"},
                  {"title":"TC",     "dataField":"tc",       "sortState":"desc",    "description":"Total Chances (assists plus putouts plus errors)"},
                  {"title":"PO",     "dataField":"po",       "sortState":"desc",    "description":"Putouts"},
                  {"title":"A",      "dataField":"a",        "sortState":"desc",    "description":"Assists"},
                  {"title":"E",      "dataField":"e",        "sortState":"desc",    "description":"Errors"},
                  {"title":"DP",     "dataField":"dp",       "sortState":"desc",    "description":"Double Plays"},
                  {"title":"PB",     "dataField":"pb",       "sortState":"desc",    "description":"Passed Ball"},
                  {"title":"SB",     "dataField":"sb",       "sortState":"desc",    "description":"Stolen Bases"},
                  {"title":"CS",     "dataField":"cs",       "sortState":"desc",    "description":"Caught Stealing"},
                  {"title":"RF",     "dataField":"rf",       "sortState":"desc",    "description":"Range Factor"},
                  {"title":"FPCT",   "dataField":"fpct",     "sortState":"desc",    "description":"Fielding Percentage"}
		]
	},
	"careerAdvancedColumns": {
		"hitting": [
			{"title":"Year",        "dataField":"season"},
                  {"title":"Team",        "dataField":"team_link",    "sortField":"team_abbrev",   "type":"Text"},
                  {"title":"LG",          "dataField":"league_link",  "sortField":"league",        "type":"Text", "description":"League"},
                  {"title":"Level",       "dataField":"sport",        "type":"Text"},
                  {"title":"PA",          "dataField":"tpa",     "sortState":"desc",    "description":"Plate Appearances"},
                  {"title":"TB",          "dataField":"tb",      "sortState":"desc",    "description":"Total Bases"},
                  {"title":"XBH",         "dataField":"xbh",     "sortState":"desc",    "description":"Extra Base Hits"},
                  {"title":"HBP",        "dataField":"hbp",      "sortState":"desc",    "description":"Hit by Pitch"},
                  {"title":"SAC",        "dataField":"sac",      "sortState":"desc",    "description":"Sacrifice Bunts"},
                  {"title":"SF",         "dataField":"sf",       "sortState":"desc",    "description":"Sacrifice Flies"},
                  {"title":"BABIP",      "dataField":"babip",    "sortState":"desc",    "description":"Batting Average on Balls in Play"},
                  {"title":"GIDP",       "dataField":"gidp",     "sortState":"desc",    "description":"Grounded Into Double Plays"},
                  {"title":"GIDPO",      "dataField":"gidp_opp", "sortState":"desc",    "description":"Grounded Into Double Play Opportunities"},
                  {"title":"NP",         "dataField":"np",       "sortState":"desc",    "description":"Number of Pitches"},
                  {"title":"P/PA",       "dataField":"ppa",      "sortState":"desc",    "description":"Pitches per Plate Appearance"},
                  {"title":"ROE",        "dataField":"roe",      "sortState":"desc",    "description":"Reached on Error"},
                  {"title":"LOB",        "dataField":"lob",      "sortState":"desc",    "description":"Left on Base"},
                  {"title":"WO",         "dataField":"wo",       "sortState":"desc",    "description":"Walkoffs"}
		],
		"pitching_advanced_1": [
			{"title":"Year",        "dataField":"season"},
                  {"title":"Team",        "dataField":"team_link",    "sortField":"team_abbrev",   "type":"Text"},
                  {"title":"LG",          "dataField":"league_link",  "sortField":"league",        "type":"Text", "description":"League"},
                  {"title":"Level",       "dataField":"sport",        "type":"Text"},
                  {"title":"QS",          "dataField":"qs",      "sortState":"desc",  "description":"Quality Starts"},
                  {"title":"GF",          "dataField":"gf",      "sortState":"desc",  "description":"Games Finished"},
                  {"title":"HLD",         "dataField":"hld",     "sortState":"desc",  "description":"Hold"},
                  {"title":"2B",         "dataField":"db",       "sortState":"desc",  "description":"Doubles"},
                  {"title":"3B",         "dataField":"tr",       "sortState":"desc",  "description":"Triples"},
                  {"title":"GIDP",       "dataField":"gidp",     "sortState":"desc",  "description":"Grounded Into Double Plays"},
                  {"title":"GIDPO",      "dataField":"gidp_opp", "sortState":"desc",  "description":"Grounded Into Double Play Opportunities"},
                  {"title":"WP",         "dataField":"wp",       "sortState":"desc",  "description":"Wild Pitches"},
                  {"title":"BK",         "dataField":"bk",       "sortState":"desc",  "description":"Balks"},
                  {"title":"SB",         "dataField":"sb",       "sortState":"desc",  "description":"Stolen Bases"},
                  {"title":"CS",         "dataField":"cs",       "sortState":"desc",  "description":"Caught Stealing"},
                  {"title":"PK",         "dataField":"pk",       "sortState":"desc",  "description":"Pickoffs"},
                  {"title":"NP",         "dataField":"np",       "sortState":"desc",  "description":"Number of Pitches Thrown"},
                  {"title":"S&#37;",     "dataField":"spct",     "sortState":"desc",  "description":"Percent of Pitches for Strikes"},
                  {"title":"P/IP",       "dataField":"pip",      "sortState":"desc",  "description":"Pitches per Inning"},
                  {"title":"P/PA",       "dataField":"ppa",      "sortState":"desc",  "description":"Pitches per Plate Appearance"}
		],
		"pitching_advanced_2": [
			{"title":"Year",    "dataField":"season"},
                  {"title":"Team",    "dataField":"team_link",    "sortField":"team_abbrev",   "type":"Text"},
                  {"title":"LG",      "dataField":"league_link",  "sortField":"league",        "type":"Text", "description":"League"},
                  {"title":"Level",   "dataField":"sport",        "type":"Text"},
                  {"title":"WPCT",    "dataField":"wpct",    "sortState":"desc",    "description":"Winning Percentage"},
                  {"title":"RS/9",    "dataField":"rs9",     "sortState":"desc",    "description":"Run Support per Nine Innings"},
                  {"title":"TBF",     "dataField":"tbf",     "sortState":"desc",    "description":"Total Batters Faced"},
                  {"title":"BABIP",  "dataField":"babip",    "sortState":"desc",    "description":"Batting Average on Balls in Play"},
                  {"title":"OBP",    "dataField":"obp",      "sortState":"desc",    "description":"On Base Percentage"},
                  {"title":"SLG",    "dataField":"slg",      "sortState":"desc",    "description":"Slugging Percentage"},
                  {"title":"OPS",    "dataField":"ops",      "sortState":"desc",    "description":"On Base Plus Slugging"},
                  {"title":"K/9",    "dataField":"k9",       "sortState":"desc",    "description":"Strikeouts per Nine Innings"},
                  {"title":"BB/9",   "dataField":"bb9",      "sortState":"desc",    "description":"Walks per Nine Innings"},
                  {"title":"HR/9",   "dataField":"hr9",      "sortState":"desc",    "description":"Home Runs per Nine Innings"},
                  {"title":"H/9",    "dataField":"h9",       "sortState":"desc",    "description":"Hits per Nine Innings"},
                  {"title":"K/BB",   "dataField":"kbb",      "sortState":"desc",    "description":"Strikeout/Walk Ratio"},
                  {"title":"IR",     "dataField":"ir",       "sortState":"desc",    "description":"Inherited Runners"},
                  {"title":"IR_S",   "dataField":"irs",      "sortState":"desc",    "description":"Inherited Runners Who Scored"},
                  {"title":"BQR",    "dataField":"bq",       "sortState":"desc",    "description":"Bequeathed Runners"},
                  {"title":"BQR_S",  "dataField":"bqs",      "sortState":"desc",    "description":"Bequeathed Runners Who Scored"}
		]

	},
      "statcastEventsColumns":{
            "hitting": [
                  {"title":"Date",                    "dataField":"date",                 "sortField":"sortDate",   "sortState":"desc"},
                  {"title":"Team",                    "dataField":"batter_team_abbrev",   "type":"Text"},
                  {"title":"LG",                      "dataField":"batter_league",        "type":"Text",    "description":"League"},
                  {"title":"OPP",                     "dataField":"pitcher_team_abbrev",  "type":"Text",    "description":"Opponent"},
                  {"title":"Pitcher",                 "dataField":"pitcher",              "type":"Text"},
                  {"title":"Pitch Speed (mph)",       "dataField":"pitch_speed"},
                  {"title":"Distance (feet)",         "dataField":"distance"},
                  {"title":"Launch Speed (mph)",      "dataField":"launch_speed"},
                  {"title":"Launch Angle (deg)",      "dataField":"launch_angle"},
                  {"title":"Height (feet)",           "dataField":"height"},
                  {"title":"Hit Type",                "dataField":"trajectory",           "type":"Text"}
            ],
            "pitching": [
                  {"title":"Date",                    "dataField":"date",                 "sortField":"sortDate",   "sortState":"desc"},
                  {"title":"Team",                    "dataField":"batter_team_abbrev",   "type":"Text"},
                  {"title":"LG",                      "dataField":"batter_league",        "type":"Text",    "description":"League"},
                  {"title":"OPP",                     "dataField":"pitcher_team_abbrev",  "type":"Text",    "description":"Opponent"},
                  {"title":"Batter",                  "dataField":"batter",               "type":"Text"},
                  {"title":"Pitch Type",              "dataField":"pitch_desc"},
                  {"title":"Pitch Speed (mph)",       "dataField":"pitch_speed"},
                  {"title":"Perceived Speed (mph)",   "dataField":"perceived_speed"},
                  {"title":"Spin Rate (rpm)",         "dataField":"spin_rate"},
                  {"title":"Extension (feet)",        "dataField":"extension"}
            ]
      }
}
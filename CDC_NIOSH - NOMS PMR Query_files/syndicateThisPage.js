String.prototype.startsWith=function(a){return this.substr(0,a.length)===a;};$(document).ready(function(){var TurnOnSyndicateThis=false;if($("body").hasClass("noSyndicateThisPage")){TurnOnSyndicateThis=false;}else{if($("body").hasClass("SyndicateThisPage")){TurnOnSyndicateThis=true;}}if(TurnOnSyndicateThis){var toolsUrl="http://tools.cdc.gov";var hostName=window.location.hostname.toLowerCase();if(hostName.startsWith("nchm-dvss1")||hostName.startsWith("nchm-tvss1")||hostName.startsWith("nchm-dvss1")||hostName.startsWith("nchm-svss1")||hostName.startsWith("apd-v-nchm-vss1")||hostName.startsWith("wwwdev")||hostName.startsWith("wwwlink")){toolsUrl="http://tools.cdc.gov";}if($("body").hasClass("widePage")){$('<li class="syndicatethis" id="syndicatethis"><a href="'+toolsUrl+"/syndication/default.aspx?url="+window.location+'" target="_blank"></a></li>').insertAfter(".pageOptions-inner > .forWide > .print");$('<li class="syndicatethis" id="syndicatethis"><a href="'+toolsUrl+"/syndication/default.aspx?url="+window.location+'" target="_blank">Syndicate</a></li>').insertAfter(".pageOptions-inner2 > .services > .print");}else{$('<li class="syndicatethis" id="syndicatethis"><a href="'+toolsUrl+"/syndication/default.aspx?url="+window.location+'" target="_blank">Syndicate Page</a></li>').insertAfter(".pageOptions-inner > #services > .print");$('<li class="syndicatethis" id="syndicatethis"><a href="'+toolsUrl+"/syndication/default.aspx?url="+window.location+'" target="_blank">Syndicate</a></li>').insertAfter(".pageOptions-horizontal .services .print");}}});
export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() : boolean {
    this.votes += 1;
    return false;
  }

  voteDown() : boolean {
    if (this.votes > 0) {
      this.votes -= 1;
    }
    return false;
  }

  // domain() is a utility function that extracts
  // the domain from a URL
  domain() : string {
    try {
      const domainAndPath : string = this.link.split('//')[1];
      return domainAndPath.split('/')[0]
    } catch (error) {
      return "";
    }
  }
}

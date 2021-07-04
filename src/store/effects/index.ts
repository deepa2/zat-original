import { QuestionsEffects } from "./questions.effect";
import { AuthEffects } from "./auth.effects";
import { DashboardEffects } from "./dashboard.effects";
import { FaqEffects } from "./faq.effects";
import { SearchEffects } from "./search.effect";
import { NotificationEffects } from "./notification.effects";
import { AddEffects } from "./add.effects";
import { QueryDetailEffects } from "./queryDetail.effects";
import { FeedbackEffects } from "./feedback.effects";
import { RoleEffects } from "./roles.effects";
import { TagEffects } from "./tag.effects";
import { ProfileEffects } from "./profile.effects";
import { HomeEffects } from "./home.effects";
import { GetAnnouncementEffects } from "./announcement.effects";
import { GetCommentsEffects } from "./announcementRatings";
import { AboutEffects } from "./about.effects";
import { HrChatBotEffects } from "./chat-bot.effects"
import { ChangePasswordEffects } from "./changePassword.effects";
import { ObWelcomeEffects } from './obLanding.effects';
import { ObDashboardEffects } from './obDashboard.effects'
import { ObAddDetailEffects } from './obAddDetails.effects'
import { DocumentDetailsEffect } from './documentDetails.effects'
import { ZenContactsEffects } from './zencontacts.effects';
import { InternalJobPostingEffects } from './internal-job-posting.effects';
import { JobDescriptionEffects } from './job-description.effects';
import { myLeaveEffects } from './myLeave.effects';
import { editProfileEffects } from './editProfile.effects'
import { ApplyJobEffect } from './applyjob.effects'
import { BannerDetailsEffects } from './bannerDetails.effects'
import { SwipeMissEffects } from './swipe-miss.effects'
import { RejectedDocsEffects } from './rejectedDocs.effects'

export const effects: any[] = [
  QuestionsEffects,
  AuthEffects,
  AddEffects,
  DashboardEffects,
  FaqEffects,
  SearchEffects,
  NotificationEffects,
  QueryDetailEffects,
  FeedbackEffects,
  RoleEffects,
  TagEffects,
  ProfileEffects,
  HomeEffects,
  GetAnnouncementEffects,
  GetCommentsEffects,
  AboutEffects,
  HrChatBotEffects,
  ChangePasswordEffects,
  ObWelcomeEffects,
  ObDashboardEffects,
  ObAddDetailEffects,
  DocumentDetailsEffect,
  ZenContactsEffects,
  InternalJobPostingEffects,
  JobDescriptionEffects,
  myLeaveEffects,
  editProfileEffects,
  ApplyJobEffect,
  BannerDetailsEffects,
  SwipeMissEffects,
  RejectedDocsEffects
];

export * from "./questions.effect";
export * from "./auth.effects";
export * from "./add.effects";
export * from "./dashboard.effects";
export * from "./faq.effects";
export * from "./search.effect";
export * from "./notification.effects";
export * from "./queryDetail.effects";
export * from "./feedback.effects";
export * from "./roles.effects";
export * from "./tag.effects";
export * from "./profile.effects";
export * from "./home.effects";
export * from "./announcement.effects";
export * from "./announcementRatings";
export * from "./about.effects";
export * from "./chat-bot.effects";
export * from "./changePassword.effects";
export * from "./obLanding.effects";
export * from "./obDashboard.effects";
export * from "./obAddDetails.effects";
export * from "./documentDetails.effects";
export * from "./zencontacts.effects";
export * from "./internal-job-posting.effects";
export * from "./job-description.effects";
export * from './myLeave.effects';
export * from './editProfile.effects';
export * from './applyjob.effects';
export * from './bannerDetails.effects';
export * from './swipe-miss.effects';
export * from './rejectedDocs.effects';

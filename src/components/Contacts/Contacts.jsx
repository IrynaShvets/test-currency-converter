import {
  Address,
  AddressLink,
  AddressText,
  Socials,
  SocialsList,
  SocialsItem,
  SocialsLink,
  Image,
} from './Contacts.styled';
import Note from '../../images/note.png';
import { GrLinkedinOption, GrFacebookOption, GrGithub } from 'react-icons/gr';

function Contacts() {
  return (
    <>
      <Image src={Note} alt="alt" />
      <div
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h3 className="title">My contacts:</h3>
      </div>

      <div>
        <Address>
          <ul>
            <li>
              <AddressText>Ivano-Frankivsk</AddressText>
            </li>
            <li>
              <AddressLink href="mailto:irinashwets@ukr.net">
                irinashwets@ukr.net
              </AddressLink>
            </li>
            <li>
              <AddressLink href="tel:+380963188646">
                +38 096 318 86 46
              </AddressLink>
            </li>
          </ul>
        </Address>

        <Socials>
          <SocialsList>
            <SocialsItem>
              <SocialsLink href="https://www.linkedin.com/in/irina-shvets/">
                <GrLinkedinOption style={{ width: 25, height: 25 }} />
              </SocialsLink>
            </SocialsItem>
            <SocialsItem>
              <SocialsLink href="https://www.facebook.com/irina.shwets.1/">
                <GrFacebookOption style={{ width: 25, height: 25 }} />
              </SocialsLink>
            </SocialsItem>
            <SocialsItem>
              <SocialsLink href="https://github.com/IrynaShvets">
                <GrGithub style={{ width: 25, height: 25 }} />
              </SocialsLink>
            </SocialsItem>
          </SocialsList>
        </Socials>
      </div>
    </>
  );
}

export default Contacts;
